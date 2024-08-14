import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreedingSettingsStorageService } from 'src/app/services/breeding-settings-storage.service';
import { BREEDING_SETTINGS } from 'src/app/utils/constants/settings/breeding_settings.const';
import { BreedingSettingsTextGenerator } from 'src/app/utils/functions/breeding-settings-text-generator';

@Component({
  selector: 'app-create-breeding-settings',
  templateUrl: './create-breeding-settings.component.html',
  styleUrls: ['./create-breeding-settings.component.scss']
})
export class CreateBreedingSettingsComponent implements OnInit {
  breedingSettingsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private breedingSettingsStorageService: BreedingSettingsStorageService,
    private breedingSettingsTextGenerator: BreedingSettingsTextGenerator
  ) { }

  ngOnInit(): void {
    this.breedingSettingsForm = this.fb.group({
      settings: this.fb.array(
        BREEDING_SETTINGS.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.defaultValue, [Validators.required, Validators.min(0.1)]],
            description: [setting.description]
          })
        )
      )
    });

    this.loadBreedingSettingsData();
  }

  get settingControls() {
    return (this.breedingSettingsForm.get('settings') as FormArray).controls;
  }

  onSubmit(): void {
    const breedingSettingsData = this.breedingSettingsForm.value.settings;
    this.breedingSettingsStorageService.setBreedingSettingsData(breedingSettingsData);
    this.breedingSettingsTextGenerator.generateText();
  }

  loadBreedingSettingsData(): void {
    const savedData = this.breedingSettingsStorageService.getBreedingSettingsData();
    if (savedData && savedData.length > 0) {
      this.breedingSettingsForm.setControl('settings', this.fb.array(
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
}
