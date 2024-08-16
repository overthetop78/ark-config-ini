import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LevelStorageService } from 'src/app/services/level-storage.service';
import { EngramPointsCalculator } from 'src/app/utils/functions/engram-points-calculator';
import { LevelExperienceGenerator } from 'src/app/utils/functions/level-experience-generator';

@Component({
  selector: 'app-create-levels',
  templateUrl: './create-levels.component.html',
  styleUrls: ['./create-levels.component.scss']
})
export class CreateLevelsComponent implements OnInit {
  maximumExperiencePlayer: number = 0;
  playerForm = this.fb.group({
    maxLevel: ['', [Validators.required, Validators.min(1), Validators.max(1000)]],
    multiplier: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
    ratio: ['', [Validators.required, Validators.min(0.1), Validators.max(10)]],
    maxEngramPoints: ['', [Validators.required, Validators.min(200), Validators.max(10000)]],
    maxEngramLevels: ['', [Validators.required, Validators.min(20), Validators.max(1000)]]
  });

  maximumExperienceDino: number = 0;
  dinoForm = this.fb.group({
    maxLevel: ['', [Validators.required, Validators.min(1), Validators.max(1000)]],
    multiplier: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
    ratio: ['', [Validators.required, Validators.min(0.1), Validators.max(10)]]
  });

  constructor(
    private fb: FormBuilder,
    private levelStorageService: LevelStorageService,
    private levelExperienceGenerator: LevelExperienceGenerator
  ) { }

  ngOnInit(): void {
    this.loadInitialData();
  }

  // Charger les données initiales à partir du service
  loadInitialData() {
    const playerData = this.levelStorageService.getPlayerLevelData();
    const dinoData = this.levelStorageService.getDinoLevelData();

    if (playerData) {
      this.playerForm.patchValue(playerData);
      this.maximumExperiencePlayer = Math.floor(playerData.multiplier * Math.pow(playerData.maxLevel, playerData.ratio / 5) * Math.log(playerData.maxLevel + playerData.ratio));
    }

    if (dinoData) {
      this.dinoForm.patchValue(dinoData);
      this.maximumExperienceDino = Math.floor(dinoData.multiplier * Math.pow(dinoData.maxLevel, dinoData.ratio / 5) * Math.log(dinoData.maxLevel + dinoData.ratio) * 1.5);
    }
  }

  onSubmitPlayer() {
    if (this.playerForm.valid) {
      const playerData = this.playerForm.value;
      this.levelStorageService.setPlayerLevelData(playerData);
      this.levelExperienceGenerator.generatePlayerLevelExperienceText();
      this.loadInitialData();
      // Générer les points d'engrammes
      this.generateEngramPoints(playerData);
    }
  }

  onSubmitDino() {
    if (this.dinoForm.valid) {
      const dinoData = this.dinoForm.value;
      this.levelStorageService.setDinoLevelData(dinoData);
      this.levelExperienceGenerator.generateDinoLevelExperienceText();
      this.loadInitialData();
      // Ajoute la logique pour traiter les données du formulaire dino
    }
  }

  generateEngramPoints(playerData: any) {
    // Créer une instance de EngramPointsCalculator en passant le service
    const engramPointsCalculator = new EngramPointsCalculator(this.levelStorageService);

    // Générer les points d'engrammes
    engramPointsCalculator.generateEngramPointsText();

    // Récupérer le texte et le tableau des points d'engrammes depuis le service
    const engramPointsText = this.levelStorageService.getEngramPointsText();
    const engramPointsArray = this.levelStorageService.getEngramPointsArray();

  }


}
