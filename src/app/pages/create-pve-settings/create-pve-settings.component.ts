import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PveSettingsStorageService } from 'src/app/services/pve-settings-storage.service'; // Assure-toi du bon chemin
import { PVE_SETTINGS } from 'src/app/utils/constants/settings/pve-settings.const';
import { PveSettingsTextGenerator } from 'src/app/utils/functions/pve-settings-text-generator'; // Assure-toi du bon chemin

@Component({
  selector: 'app-create-pve-settings',
  templateUrl: './create-pve-settings.component.html',
  styleUrls: ['./create-pve-settings.component.scss'] // SCSS au lieu de CSS
})
export class CreatePveSettingsComponent implements OnInit {
  pveSettingsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pveSettingsStorageService: PveSettingsStorageService,
    private pveSettingsTextGenerator: PveSettingsTextGenerator
  ) { }

  ngOnInit(): void {
    this.pveSettingsForm = this.fb.group({
      settings: this.fb.array(
        PVE_SETTINGS.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.defaultValue, [Validators.required]],
            description: [setting.description]
          })
        )
      )
    });

    this.loadPveSettingsData();
  }

  get settingControls() {
    return (this.pveSettingsForm.get('settings') as FormArray).controls;
  }

  onSubmit(): void {
    const pveSettingsData = this.pveSettingsForm.value.settings;
    this.pveSettingsStorageService.setPveSettingsData(pveSettingsData);
    this.pveSettingsTextGenerator.generateText();
  }

  loadPveSettingsData(): void {
    const savedData: { nameFr: string, key: string, value: any, description: string }[] = this.pveSettingsStorageService.getPveSettingsData();
    if (savedData && savedData.length > 0) {
      this.pveSettingsForm.setControl('settings', this.fb.array(
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
    const formArray = this.pveSettingsForm.get('settings') as FormArray;
    formArray.at(index).get('value')?.setValue(input.checked);
  }
}
