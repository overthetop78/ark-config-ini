import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerSettingsStorageService } from 'src/app/services/player-settings-storage.service'; // Assure-toi du bon chemin
import { PLAYER_SETTINGS } from 'src/app/utils/constants/settings/player-settings.const';
import { PlayerSettingsTextGenerator } from 'src/app/utils/functions/player-settings-text-generator'; // Assure-toi du bon chemin

@Component({
  selector: 'app-create-player-settings',
  templateUrl: './create-player-settings.component.html',
  styleUrls: ['./create-player-settings.component.scss'] // SCSS au lieu de CSS
})
export class CreatePlayerSettingsComponent implements OnInit {
  playerSettingsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private playerSettingsStorageService: PlayerSettingsStorageService,
    private playerSettingsTextGenerator: PlayerSettingsTextGenerator
  ) { }

  ngOnInit(): void {
    this.playerSettingsForm = this.fb.group({
      settings: this.fb.array(
        PLAYER_SETTINGS.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.defaultValue, [Validators.required]],
            description: [setting.description]
          })
        )
      )
    });

    this.loadPlayerSettingsData();
  }

  get settingControls() {
    return (this.playerSettingsForm.get('settings') as FormArray).controls;
  }

  onSubmit(): void {
    const playerSettingsData = this.playerSettingsForm.value.settings;
    this.playerSettingsStorageService.setPlayerSettingsData(playerSettingsData);
    this.playerSettingsTextGenerator.generateText();
  }

  loadPlayerSettingsData(): void {
    const savedData: { nameFr: string, key: string, value: any, description: string }[] = this.playerSettingsStorageService.getPlayerSettingsData();
    if (savedData && savedData.length > 0) {
      this.playerSettingsForm.setControl('settings', this.fb.array(
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
    const formArray = this.playerSettingsForm.get('settings') as FormArray;
    formArray.at(index).get('value')?.setValue(input.checked);
  }
}
