import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { XpSettingsStorageService } from 'src/app/services/xp-settings-storage.service';
import { XP_SETTINGS } from 'src/app/utils/constants/settings/xp-settings.const';
import { XpSettingsTextGenerator } from 'src/app/utils/functions/xp-settings-text-generator';

@Component({
  selector: 'app-create-xp-settings',
  templateUrl: './create-xp-settings.component.html',
  styleUrls: ['./create-xp-settings.component.scss']
})
export class CreateXpSettingsComponent implements OnInit {
  xpSettingsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private xpSettingsStorageService: XpSettingsStorageService,
    private xpSettingsTextGenerator: XpSettingsTextGenerator
  ) { }

  ngOnInit(): void {
    this.xpSettingsForm = this.fb.group({
      settings: this.fb.array(
        XP_SETTINGS.map(setting =>
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
    return (this.xpSettingsForm.get('settings') as FormArray).controls;
  }

  onSubmit(): void {
    const xpSettingsData = this.xpSettingsForm.value.settings;
    this.xpSettingsStorageService.setXPSettingsData(xpSettingsData);
    this.xpSettingsTextGenerator.generateText();
  }

  loadEngramSettingsData(): void {
    const savedData: { nameFr: string, key: string, value: any, description: string }[] = this.xpSettingsStorageService.getXPSettingsData();
    if (savedData && savedData.length > 0) {
      this.xpSettingsForm.setControl('settings', this.fb.array(
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
    const formArray = this.xpSettingsForm.get('settings') as FormArray;
    formArray.at(index).get('value')?.setValue(input.checked);
  }
}
