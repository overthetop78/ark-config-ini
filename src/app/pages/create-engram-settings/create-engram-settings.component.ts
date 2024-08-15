import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EngramSettingsStorageService } from 'src/app/services/engram-settings-storage.service';
import { ENGRAM_SETTINGS } from 'src/app/utils/constants/settings/engram-settings.const';
import { EngramSettingsTextGenerator } from 'src/app/utils/functions/engram-settings-text-generator';

@Component({
  selector: 'app-create-engram-settings',
  templateUrl: './create-engram-settings.component.html',
  styleUrls: ['./create-engram-settings.component.scss']
})
export class CreateEngramSettingsComponent implements OnInit {
  engramSettingsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private engramSettingsStorageService: EngramSettingsStorageService,
    private engramSettingsTextGenerator: EngramSettingsTextGenerator
  ) { }

  ngOnInit(): void {
    this.engramSettingsForm = this.fb.group({
      settings: this.fb.array(
        ENGRAM_SETTINGS.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.defaultValue, [Validators.required]],
            description: [setting.description]
          })
        )
      )
    });

    this.loadEngramSettingsData();
  }

  get settingControls() {
    return (this.engramSettingsForm.get('settings') as FormArray).controls;
  }

  onSubmit(): void {
    const engramSettingsData = this.engramSettingsForm.value.settings;
    this.engramSettingsStorageService.setEngramSettingsData(engramSettingsData);
    this.engramSettingsTextGenerator.generateText();
  }

  loadEngramSettingsData(): void {
    const savedData: { nameFr: string, key: string, value: any, description: string }[] = this.engramSettingsStorageService.getEngramSettingsData();
    if (savedData && savedData.length > 0) {
      this.engramSettingsForm.setControl('settings', this.fb.array(
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
    const formArray = this.engramSettingsForm.get('settings') as FormArray;
    formArray.at(index).get('value')?.setValue(input.checked);
  }
}
