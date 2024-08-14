// create-loot-settings.component.ts
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LootSettingsStorageService } from 'src/app/services/loot-settings-storage.service';
import { LOOT_SETTINGS } from 'src/app/utils/constants/settings/loot-settings.const';
import { LootSettingsTextGenerator } from 'src/app/utils/functions/loot-settings-text-generator';

@Component({
  selector: 'app-create-loot-settings',
  templateUrl: './create-loot-settings.component.html',
  styleUrls: ['./create-loot-settings.component.scss']
})

export class CreateLootSettingsComponent implements OnInit {
  lootSettingsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private lootSettingsStorageService: LootSettingsStorageService,
    private lootSettingsTextGenerator: LootSettingsTextGenerator
  ) { }

  ngOnInit(): void {
    this.lootSettingsForm = this.fb.group({
      settings: this.fb.array(
        LOOT_SETTINGS.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.defaultValue, [Validators.required]],
            description: [setting.description]
          })
        )
      )
    });

    this.loadlootSettingsData();
  }

  get settingControls() {
    return (this.lootSettingsForm.get('settings') as FormArray).controls;
  }

  onSubmit(): void {
    const lootSettingsData = this.lootSettingsForm.value.settings;
    this.lootSettingsStorageService.setLootSettingsData(lootSettingsData);
    this.lootSettingsTextGenerator.generateText();
  }

  loadlootSettingsData(): void {
    const savedData: { nameFr: string, key: string, value: any, description: string }[] = this.lootSettingsStorageService.getLootSettingsData();
    if (savedData && savedData.length > 0) {
      this.lootSettingsForm.setControl('settings', this.fb.array(
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
    const formArray = this.lootSettingsForm.get('settings') as FormArray;
    formArray.at(index).get('value')?.setValue(input.checked);
  }
}
