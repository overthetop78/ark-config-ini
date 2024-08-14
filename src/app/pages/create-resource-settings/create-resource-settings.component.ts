import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceSettingsStorageService } from 'src/app/services/resource-settings-storage.service';
import { RESOURCE_SETTINGS } from 'src/app/utils/constants/settings/resource-settings.const';
import { ResourceSettingsTextGenerator } from 'src/app/utils/functions/resource-settings-text-generator';

@Component({
  selector: 'app-create-resource-settings',
  templateUrl: './create-resource-settings.component.html',
  styleUrls: ['./create-resource-settings.component.scss']
})
export class CreateResourceSettingsComponent implements OnInit {
  resourceSettingsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private resourceSettingsStorageService: ResourceSettingsStorageService,
    private resourceSettingsTextGenerator: ResourceSettingsTextGenerator
  ) { }

  ngOnInit(): void {
    this.resourceSettingsForm = this.fb.group({
      settings: this.fb.array(
        RESOURCE_SETTINGS.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.defaultValue, [Validators.required]],
            description: [setting.description]
          })
        )
      )
    });

    this.loadResourceSettingsData();
  }

  get settingControls() {
    return (this.resourceSettingsForm.get('settings') as FormArray).controls;
  }

  onSubmit(): void {
    const resourceSettingsData = this.resourceSettingsForm.value.settings;
    this.resourceSettingsStorageService.setResourceSettingsData(resourceSettingsData);
    this.resourceSettingsTextGenerator.generateText();
  }

  loadResourceSettingsData(): void {
    const savedData: { nameFr: string, key: string, value: any, description: string }[] = this.resourceSettingsStorageService.getResourceSettingsData();
    if (savedData && savedData.length > 0) {
      this.resourceSettingsForm.setControl('settings', this.fb.array(
        savedData.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.value, [Validators.required]],
            description: [setting.description]
          })
        )
      ));
    }
  }

  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }

  onBooleanChange(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const formArray = this.resourceSettingsForm.get('settings') as FormArray;
    formArray.at(index).get('value')?.setValue(input.checked);
  }
}
