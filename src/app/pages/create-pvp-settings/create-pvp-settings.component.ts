import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PvpSettingsStorageService } from 'src/app/services/pvp-settings-storage.service';
import { PVP_SETTINGS } from 'src/app/utils/constants/settings/pvp_settings.const';
import { PvpSettingsTextGenerator } from 'src/app/utils/functions/pvp-settings-text-generator'; // Assure-toi du bon chemin

@Component({
  selector: 'app-create-pvp-settings',
  templateUrl: './create-pvp-settings.component.html',
  styleUrls: ['./create-pvp-settings.component.scss'] // SCSS au lieu de CSS
})
export class CreatePvpSettingsComponent implements OnInit {
  pvpSettingsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pvpSettingsStorageService: PvpSettingsStorageService,
    private pvpSettingsTextGenerator: PvpSettingsTextGenerator
  ) { }

  ngOnInit(): void {
    this.pvpSettingsForm = this.fb.group({
      settings: this.fb.array(
        PVP_SETTINGS.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.defaultValue, [Validators.required]],
            description: [setting.description]
          })
        )
      )
    });

    this.loadPvpSettingsData();
  }

  get settingControls() {
    return (this.pvpSettingsForm.get('settings') as FormArray).controls;
  }

  onSubmit(): void {
    const pvpSettingsData = this.pvpSettingsForm.value.settings;
    this.pvpSettingsStorageService.setPvpSettingsData(pvpSettingsData);
    this.pvpSettingsTextGenerator.generateText();
  }

  loadPvpSettingsData(): void {
    const savedData: { nameFr: string, key: string, value: any, description: string }[] = this.pvpSettingsStorageService.getPvpSettingsData();
    if (savedData && savedData.length > 0) {
      this.pvpSettingsForm.setControl('settings', this.fb.array(
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
    const formArray = this.pvpSettingsForm.get('settings') as FormArray;
    formArray.at(index).get('value')?.setValue(input.checked);
  }
}
