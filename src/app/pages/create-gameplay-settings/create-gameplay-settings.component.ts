import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameplaySettingsStorageService } from 'src/app/services/gameplay-settings-storage.service';
import { GAMEPLAY_SETTINGS } from 'src/app/utils/constants/settings/gameplay-settings.const';
import { GameplaySettingsTextGenerator } from 'src/app/utils/functions/gameplay-settings-text-generator';

@Component({
  selector: 'app-create-gameplay-settings',
  templateUrl: './create-gameplay-settings.component.html',
  styleUrls: ['./create-gameplay-settings.component.scss']
})
export class CreateGameplaySettingsComponent implements OnInit {
  gameplaySettingsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gameplaySettingsStorageService: GameplaySettingsStorageService,
    private gameplaySettingsTextGenerator: GameplaySettingsTextGenerator
  ) { }

  ngOnInit(): void {
    this.gameplaySettingsForm = this.fb.group({
      settings: this.fb.array(
        GAMEPLAY_SETTINGS.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.defaultValue, [Validators.required]],
            description: [setting.description]
          })
        )
      )
    });

    this.loadGameplaySettingsData();
  }

  get settingControls() {
    return (this.gameplaySettingsForm.get('settings') as FormArray).controls;
  }

  onSubmit(): void {
    const gameplaySettingsData = this.gameplaySettingsForm.value.settings;
    this.gameplaySettingsStorageService.setGameplaySettingsData(gameplaySettingsData);
    this.gameplaySettingsTextGenerator.generateText();
  }

  loadGameplaySettingsData(): void {
    const savedData: { nameFr: string, key: string, value: any, description: string }[] = this.gameplaySettingsStorageService.getGameplaySettingsData();
    if (savedData && savedData.length > 0) {
      this.gameplaySettingsForm.setControl('settings', this.fb.array(
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
    const formArray = this.gameplaySettingsForm.get('settings') as FormArray;
    formArray.at(index).get('value')?.setValue(input.checked);
  }
}
