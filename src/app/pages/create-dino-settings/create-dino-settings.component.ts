import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DinoSettingsStorageService } from 'src/app/services/dino-settings-storage.service';
import { DINO_SETTINGS } from 'src/app/utils/constants/settings/dino-settings.const';
import { DinoSettingsTextGenerator } from 'src/app/utils/functions/dino-settings-text-generator';

@Component({
  selector: 'app-create-dino-settings',
  templateUrl: './create-dino-settings.component.html',
  styleUrls: ['./create-dino-settings.component.scss']
})
export class CreateDinoSettingsComponent implements OnInit {
  dinoSettingsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dinoSettingsStorageService: DinoSettingsStorageService,
    private dinoSettingsTextGenerator: DinoSettingsTextGenerator
  ) { }

  ngOnInit(): void {
    this.dinoSettingsForm = this.fb.group({
      settings: this.fb.array(
        DINO_SETTINGS.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.defaultValue, [Validators.required, Validators.min(0.1)]],
            description: [setting.description]
          })
        )
      )
    });

    this.loadDinoSettingsData();
  }

  get settingControls() {
    return (this.dinoSettingsForm.get('settings') as FormArray).controls;
  }

  onSubmit(): void {
    const dinoSettingsData = this.dinoSettingsForm.value.settings;
    this.dinoSettingsStorageService.setDinoSettingsData(dinoSettingsData);
    this.dinoSettingsTextGenerator.generateText();
  }

  loadDinoSettingsData(): void {
    const savedData = this.dinoSettingsStorageService.getDinoSettingsData();
    if (savedData && savedData.length > 0) {
      this.dinoSettingsForm.setControl('settings', this.fb.array(
        savedData.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.value, [Validators.required, Validators.min(0.1)]]
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
    const formArray = this.dinoSettingsForm.get('settings') as FormArray;
    formArray.at(index).get('value')?.setValue(input.checked);
  }

}
