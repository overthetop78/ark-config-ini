import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ObjectStorageService } from 'src/app/services/object-storage.service';
import { ARMOR } from 'src/app/utils/constants/objects/armor.const';
import { ARTIFACTS } from 'src/app/utils/constants/objects/artifacts.const';
import { CHIBIS } from 'src/app/utils/constants/objects/chibis.const';
import { COLORANTS } from 'src/app/utils/constants/objects/colorants.const';
import { CONSUMABLES } from 'src/app/utils/constants/objects/consommables.const';
import { EGGS } from 'src/app/utils/constants/objects/eggs.const';
import { FARMING } from 'src/app/utils/constants/objects/farming.const';
import { HARVEST_RESOURCE } from 'src/app/utils/constants/objects/harvest-resource.const';
import { MUNITIONS } from 'src/app/utils/constants/objects/munitions.const';
import { RECIPES } from 'src/app/utils/constants/objects/recipes.const';
import { SADDLES } from 'src/app/utils/constants/objects/saddles.const';
import { SEEDS } from 'src/app/utils/constants/objects/seeds.const';
import { STRUCTURES } from 'src/app/utils/constants/objects/structures.const';
import { TOOLS } from 'src/app/utils/constants/objects/tools.const';
import { TROPHIES } from 'src/app/utils/constants/objects/trophies.const';
import { VEHICLES } from 'src/app/utils/constants/objects/vehicles.const';
import { WEAPONS } from 'src/app/utils/constants/objects/weapons.const';
import { ObjectHarvestMultiplierTextGenerator } from 'src/app/utils/functions/object-harvest-multiplier-text-generator';
import { ObjectQuantityTextGenerator } from 'src/app/utils/functions/object-quantity-text-generator';

@Component({
  selector: 'app-create-object-config',
  templateUrl: './create-object-config.component.html',
  styleUrls: ['./create-object-config.component.scss']
})
export class CreateObjectConfigComponent implements OnInit {
  objectConfigForm!: FormGroup;
  OBJECTS_ITEMS: { nameFr: string, key: string, stackable: boolean, defaultValue: number, image: string, description: string, category: string, blueprint: string, id: number | null }[] = [];

  constructor(
    private fb: FormBuilder,
    private objectStorageService: ObjectStorageService,
    private objectHarvestMultiplierTextGenerator: ObjectHarvestMultiplierTextGenerator,
    private objectQuantityTextGenerator: ObjectQuantityTextGenerator
  ) { }

  ngOnInit(): void {
    this.OBJECTS_ITEMS = [
      ...HARVEST_RESOURCE,
      ...FARMING,
      ...CONSUMABLES,
      ...STRUCTURES,
      ...MUNITIONS,
      ...ARMOR,
      ...COLORANTS,
      ...ARTIFACTS,
      ...EGGS,
      ...RECIPES,
      ...SADDLES,
      ...SEEDS,
      ...TOOLS,
      ...VEHICLES,
      ...WEAPONS,
      ...CHIBIS,
      ...TROPHIES,
    ];

    this.objectConfigForm = this.fb.group({
      items: this.fb.array(
        this.OBJECTS_ITEMS.map(item =>
          this.fb.group({
            nameFr: [item.nameFr],
            stackable: [item.stackable],
            MaxItemQuantity: [item.defaultValue, [Validators.required, Validators.min(1)]],
            bIgnoreMultiplier: [false],
            Multiplier: [1, [Validators.min(0.01)]],
            key: [item.key],
            image: [item.image],
            description: [item.description],
            category: [item.category],
            blueprint: [item.blueprint],
            id: [item.id]
          })))
    });

    this.loadObjectConfigData();
  }

  get itemControls() {
    return (this.objectConfigForm.get('items') as FormArray).controls;
  }

  onSubmit(): void {
    const objectConfigData = this.objectConfigForm.value.items;
    this.objectStorageService.setObjectConfig(objectConfigData);
    this.objectHarvestMultiplierTextGenerator.generateText();
    this.objectQuantityTextGenerator.generateText();
  }

  loadObjectConfigData(): void {
    const savedData = this.objectStorageService.getObjectConfig();
    if (savedData && savedData.length > 0) {
      this.objectConfigForm.setControl('items', this.fb.array(
        savedData.map(item =>
          this.fb.group({
            nameFr: [item.nameFr],
            stackable: [item.stackable],
            MaxItemQuantity: [{ value: item.MaxItemQuantity }, [Validators.required, Validators.min(1)]],
            bIgnoreMultiplier: [item.bIgnoreMultiplier],
            Multiplier: [{ value: item.Multiplier }, [Validators.min(0.01)]]
          })
        )
      ));
    }
    for (let i = 0; i < this.itemControls.length; i++) {
      if (this.itemControls[i].get('stackable')?.value) this.itemControls[i].get('MaxItemQuantity')?.enable();
      else this.itemControls[i].get('MaxItemQuantity')?.disable();
      if (this.itemControls[i].get('bIgnoreMultiplier')?.value) this.itemControls[i].get('Multiplier')?.disable();
      else this.itemControls[i].get('Multiplier')?.enable();
    }
  }

  onStackableChange(index: number): void {
    const formArray = this.objectConfigForm.get('items') as FormArray;
    const control = formArray.at(index);
    const stackable = control.get('stackable')?.value;

    if (stackable) {
      control.get('MaxItemQuantity')?.enable();
    } else {
      control.get('MaxItemQuantity')?.disable();
      control.get('MaxItemQuantity')?.setValue(1);
    }
    control.get('MaxItemQuantity')?.updateValueAndValidity();
  }

  onIgnoreMultiplierChange(index: number): void {
    const formArray = this.objectConfigForm.get('items') as FormArray;
    const control = formArray.at(index);
    const ignoreMultiplier = control.get('bIgnoreMultiplier')?.value;

    if (ignoreMultiplier) {
      control.get('Multiplier')?.disable();
      control.get('Multiplier')?.setValue(null);
    } else {
      control.get('Multiplier')?.enable();
      control.get('Multiplier')?.setValue(1);
    }
    control.get('Multiplier')?.updateValueAndValidity();
  }
}
