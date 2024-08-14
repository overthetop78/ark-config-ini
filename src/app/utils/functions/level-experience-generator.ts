import { Injectable } from '@angular/core';
import { LevelStorageService } from "src/app/services/level-storage.service";

@Injectable({
  providedIn: 'root',
})
export class LevelExperienceGenerator {

  constructor(private storageService: LevelStorageService) { }

  generateLevelExperienceText(): void {
    // Récupérer les données directement depuis le service
    const playerData = this.storageService.getPlayerLevelData();
    const dinoData = this.storageService.getDinoLevelData();

    // Vérifier que les données existent
    if (!playerData || !dinoData) {
      throw new Error('Les données pour les joueurs ou les dinos ne sont pas disponibles.');
    }


    // Génération du texte pour les joueurs
    let experienceText = 'LevelExperienceRampOverrides=(ExperiencePointsForLevel[0]=1,';
    for (let i = 1; i <= playerData.maxLevel; i++) {
      let experiencePoints = Math.floor(playerData.multiplier * Math.pow(i, playerData.ratio / 5) * Math.log(i + playerData.ratio));
      experienceText += `ExperiencePointsForLevel[${i}]=${experiencePoints}`;

      if (i < playerData.maxLevel) {
        experienceText += ',';
      }
    }
    experienceText += ')';

    // Génération du texte pour les dinosaures
    let dinoExperienceText = 'LevelExperienceRampOverrides=(ExperiencePointsForLevel[0]=1,';
    for (let i = 1; i <= dinoData.maxLevel; i++) {
      let experiencePoints = Math.floor(dinoData.multiplier * Math.pow(i, dinoData.ratio / 5) * Math.log(i + dinoData.ratio) * 1.5);
      dinoExperienceText += `ExperiencePointsForLevel[${i}]=${experiencePoints}`;

      if (i < dinoData.maxLevel) {
        dinoExperienceText += ',';
      }
    }
    dinoExperienceText += ')';

    // Définir les valeurs de OverrideMaxExperiencePoints en tant que texte
    const overrideMaxExperiencePointsPlayer = `OverrideMaxExperiencePointsPlayer=${Math.floor(playerData.multiplier * Math.pow(playerData.maxLevel, playerData.ratio / 5) * Math.log(playerData.maxLevel + playerData.ratio))}`;
    const overrideMaxExperiencePointsDino = `OverrideMaxExperiencePointsDino=${Math.floor(dinoData.multiplier * Math.pow(dinoData.maxLevel, dinoData.ratio / 5) * Math.log(dinoData.maxLevel + dinoData.ratio) * 1.5)}`;

    // Sauvegarde des textes générés dans le service
    this.storageService.setPlayerExperienceText(experienceText);
    this.storageService.setDinoExperienceText(dinoExperienceText);
    this.storageService.setOverrideMaxExperiencePointsPlayer(overrideMaxExperiencePointsPlayer);
    this.storageService.setOverrideMaxExperiencePointsDino(overrideMaxExperiencePointsDino);
  }
}
