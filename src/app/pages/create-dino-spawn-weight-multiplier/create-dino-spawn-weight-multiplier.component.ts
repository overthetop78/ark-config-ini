import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DinoSpawnStorageService } from 'src/app/services/dino-spawn-storage.service';
import { DINO_SPAWN_WEIGHTS } from 'src/app/utils/constants/dino-spawn-weights.const';
import { DinoSpawnTextGenerator } from 'src/app/utils/functions/dino-spawn-text-generator';

@Component({
  selector: 'app-create-dino-spawn-weight-multiplier',
  templateUrl: './create-dino-spawn-weight-multiplier.component.html',
  styleUrls: ['./create-dino-spawn-weight-multiplier.component.scss']
})
export class CreateDinoSpawnWeightMultiplierComponent implements OnInit {
  dinoSpawnForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dinoSpawnStorageService: DinoSpawnStorageService,
    private dinoSpawnTextGenerator: DinoSpawnTextGenerator
  ) { }

  ngOnInit(): void {
    this.dinoSpawnForm = this.fb.group({
      dinos: this.fb.array(
        DINO_SPAWN_WEIGHTS.map(dino =>
          this.fb.group({
            nameFr: [dino.nameFr],
            dinoNameTag: [dino.dinoNameTag],
            spawnWeightMultiplier: [dino.spawnWeightMultiplier, [Validators.required, Validators.min(0.1)]],
            overrideSpawnLimitPercentage: [dino.overrideSpawnLimitPercentage],
            spawnLimitPercentage: [dino.spawnLimitPercentage, [Validators.required, Validators.min(0), Validators.max(1)]],
          })
        )
      )
    });

    this.loadDinoSpawnData();
  }

  get dinoControls() {
    return (this.dinoSpawnForm.get('dinos') as FormArray).controls;
  }

  onSubmit(): void {
    const dinoSpawnData = this.dinoSpawnForm.value.dinos;
    this.dinoSpawnStorageService.setDinoSpawnData(dinoSpawnData);
    this.dinoSpawnTextGenerator.generateDinoSpawnText(); // Générer et sauvegarder le texte
    console.log('Dino spawn data saved:', dinoSpawnData);
  }

  loadDinoSpawnData(): void {
    const savedData = this.dinoSpawnStorageService.getDinoSpawnData();
    if (savedData && savedData.length > 0) {
      this.dinoSpawnForm.setControl('dinos', this.fb.array(
        savedData.map(dino =>
          this.fb.group({
            nameFr: [dino.nameFr],
            dinoNameTag: [dino.dinoNameTag],
            spawnWeightMultiplier: [dino.spawnWeightMultiplier, [Validators.required, Validators.min(0.1)]],
            overrideSpawnLimitPercentage: [dino.overrideSpawnLimitPercentage],
            spawnLimitPercentage: [dino.spawnLimitPercentage, [Validators.required, Validators.min(0), Validators.max(1)]],
          })
        )
      ));
    }
  }
}
