import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StructureSettingsStorageService } from 'src/app/services/structure-settings-storage.service';
import { STRUCTURE_SETTINGS } from 'src/app/utils/constants/settings/structure-settings.const';
import { StructureSettingsTextGenerator } from 'src/app/utils/functions/structure-settings-text-generator';

@Component({
  selector: 'app-create-structure-settings',
  templateUrl: './create-structure-settings.component.html',
  styleUrls: ['./create-structure-settings.component.scss']
})
export class CreateStructureSettingsComponent implements OnInit {
  structureSettingsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private structureSettingsStorageService: StructureSettingsStorageService,
    private structureSettingsTextGenerator: StructureSettingsTextGenerator
  ) { }

  ngOnInit(): void {
    this.structureSettingsForm = this.fb.group({
      settings: this.fb.array(
        STRUCTURE_SETTINGS.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.defaultValue, [Validators.required]],
            description: [setting.description]
          })
        )
      )
    });

    this.loadStructureSettingsData();
  }

  get settingControls() {
    return (this.structureSettingsForm.get('settings') as FormArray).controls;
  }

  onSubmit(): void {
    const structureSettingsData = this.structureSettingsForm.value.settings;
    this.structureSettingsStorageService.setStructureSettingsData(structureSettingsData);
    this.structureSettingsTextGenerator.generateText();
  }

  loadStructureSettingsData(): void {
    const savedData: { nameFr: string, key: string, value: any, description: string }[] = this.structureSettingsStorageService.getStructureSettingsData();
    if (savedData && savedData.length > 0) {
      this.structureSettingsForm.setControl('settings', this.fb.array(
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
    const formArray = this.structureSettingsForm.get('settings') as FormArray;
    formArray.at(index).get('value')?.setValue(input.checked);
  }
}
