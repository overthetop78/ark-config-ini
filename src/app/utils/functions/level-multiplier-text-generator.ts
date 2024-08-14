import { Injectable } from '@angular/core';
import { LevelExperienceStorageService } from 'src/app/services/level-experience-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LevelMultiplierTextGenerator {
  constructor(private levelExperienceStorageService: LevelExperienceStorageService) { }

  generatePlayerMultiplierText(): string {
    const playerLevelExperience = this.levelExperienceStorageService.getPlayerLevelExperience();
    if (!playerLevelExperience) {
      throw new Error('Les données pour les multiplicateurs des joueurs ne sont pas disponibles.');
    }

    let configText = '';

    // Utiliser l'ID pour générer le texte
    playerLevelExperience.forEach((stat: { id: number; value: number }) => {
      configText += `PerLevelStatsMultiplier_Player[${stat.id}]=${stat.value}\n`;
    });

    // Sauvegarder le texte généré dans le service
    this.levelExperienceStorageService.setPlayerMultiplierText(configText.trim());

    return configText.trim();
  }

  generateDinoWildMultiplierText(): string {
    const dinoWildLevelExperience = this.levelExperienceStorageService.getDinoWildLevelExperience();
    if (!dinoWildLevelExperience) {
      throw new Error('Les données pour les multiplicateurs des dinos sauvages ne sont pas disponibles.');
    }

    let configText = '';

    // Utiliser l'ID pour générer le texte
    dinoWildLevelExperience.forEach((stat: { id: number; value: number }) => {
      configText += `PerLevelStatsMultiplier_DinoWild[${stat.id}]=${stat.value}\n`;
    });

    // Sauvegarder le texte généré dans le service
    this.levelExperienceStorageService.setDinoWildMultiplierText(configText.trim());

    return configText.trim();
  }

  generateDinoTamedMultiplierText(): string {
    const dinoTamedLevelExperience = this.levelExperienceStorageService.getDinoTamedLevelExperience();
    if (!dinoTamedLevelExperience) {
      throw new Error('Les données pour les multiplicateurs des dinos apprivoisés ne sont pas disponibles.');
    }

    let configText = '';

    // Utiliser l'ID pour générer le texte
    dinoTamedLevelExperience.forEach((stat: { id: number; value: number }) => {
      configText += `PerLevelStatsMultiplier_DinoTamed[${stat.id}]=${stat.value}\n`;
    });

    // Sauvegarder le texte généré dans le service
    this.levelExperienceStorageService.setDinoTamedMultiplierText(configText.trim());

    return configText.trim();
  }

  generateDinoTamedAffinityMultiplierText(): string {
    const dinoTamedAffinityLevelExperience = this.levelExperienceStorageService.getDinoTamedAffinityLevelExperience();
    if (!dinoTamedAffinityLevelExperience) {
      throw new Error('Les données pour les multiplicateurs d\'affinité des dinos apprivoisés ne sont pas disponibles.');
    }

    let configText = '';

    // Utiliser l'ID pour générer le texte
    dinoTamedAffinityLevelExperience.forEach((stat: { id: number; value: number }) => {
      configText += `PerLevelStatsMultiplier_DinoTamed_Affinity[${stat.id}]=${stat.value}\n`;
    });

    // Sauvegarder le texte généré dans le service
    this.levelExperienceStorageService.setDinoTamedAffinityMultiplierText(configText.trim());

    return configText.trim();
  }
}
