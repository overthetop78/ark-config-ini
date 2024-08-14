import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeSettingsStorageService } from 'src/app/services/recipe-settings-storage.service';
import { RECIPE_SETTINGS } from 'src/app/utils/constants/settings/recipe_settings.const';
import { RecipeSettingsTextGenerator } from 'src/app/utils/functions/recipe-settings-text-generator';

@Component({
  selector: 'app-create-recipe-settings',
  templateUrl: './create-recipe-settings.component.html',
  styleUrls: ['./create-recipe-settings.component.scss']
})
export class CreateRecipeSettingsComponent implements OnInit {
  recipeSettingsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private recipeSettingsStorageService: RecipeSettingsStorageService,
    private recipeSettingsTextGenerator: RecipeSettingsTextGenerator
  ) { }

  ngOnInit(): void {
    this.recipeSettingsForm = this.fb.group({
      settings: this.fb.array(
        RECIPE_SETTINGS.map(setting =>
          this.fb.group({
            nameFr: [setting.nameFr],
            key: [setting.key],
            value: [setting.defaultValue, [Validators.required]],
            description: [setting.description]
          })
        )
      )
    });

    this.loadRecipeSettingsData();
  }

  get settingControls() {
    return (this.recipeSettingsForm.get('settings') as FormArray).controls;
  }

  onSubmit(): void {
    const recipeSettingsData = this.recipeSettingsForm.value.settings;
    this.recipeSettingsStorageService.setRecipeSettingsData(recipeSettingsData);
    this.recipeSettingsTextGenerator.generateText();
  }

  loadRecipeSettingsData(): void {
    const savedData: { nameFr: string, key: string, value: any, description: string }[] = this.recipeSettingsStorageService.getRecipeSettingsData();
    if (savedData && savedData.length > 0) {
      this.recipeSettingsForm.setControl('settings', this.fb.array(
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
    const formArray = this.recipeSettingsForm.get('settings') as FormArray;
    formArray.at(index).get('value')?.setValue(input.checked);
  }
}
