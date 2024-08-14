import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FarmingSettingsStorageService } from 'src/app/services/farming-settings-storage.service';
import { FARMING_SETTINGS } from 'src/app/utils/constants/settings/farming-settings.const';
import { FarmingSettingsTextGenerator } from 'src/app/utils/functions/farming-settings-text-generator';

@Component({
  selector: 'app-create-farming-settings',
  templateUrl: './create-farming-settings.component.html',
  styleUrls: ['./create-farming-settings.component.scss']
})
export class CreateFarmingSettingsComponent implements OnInit {
  farmingSettingsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private farmingSettingsStorageService: FarmingSettingsStorageService,
    private farmingSettingsTextGenerator: FarmingSettingsTextGenerator
  ) { }

  ngOnInit(): void {
    this.farmingSettingsForm = this.fb.group({
      settings: this.fb.array(
        FARMING_SETTINGS.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.defaultValue, [Validators.required]],
            description: [setting.description]
          })
        )
      )
    });

    this.loadFarmingSettingsData();
  }

  get settingControls() {
    return (this.farmingSettingsForm.get('settings') as FormArray).controls;
  }

  onSubmit(): void {
    const farmingSettingsData = this.farmingSettingsForm.value.settings;
    this.farmingSettingsStorageService.setFarmingSettingsData(farmingSettingsData);
    this.farmingSettingsTextGenerator.generateText();
  }

  loadFarmingSettingsData(): void {
    const savedData: { nameFr: string, key: string, value: any, description: string }[] = this.farmingSettingsStorageService.getFarmingSettingsData();
    if (savedData && savedData.length > 0) {
      this.farmingSettingsForm.setControl('settings', this.fb.array(
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
    const formArray = this.farmingSettingsForm.get('settings') as FormArray;
    formArray.at(index).get('value')?.setValue(input.checked);
  }
}
