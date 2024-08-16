import { Injectable } from '@angular/core';
import { LevelStorageService } from 'src/app/services/level-storage.service';

@Injectable({
  providedIn: 'root',
})
export class EngramPointsCalculator {
  constructor(private storageService: LevelStorageService) { }

  generateEngramPointsText(): void {
    // Récupérer les données directement depuis le service
    const playerData = this.storageService.getPlayerLevelData();

    // Vérifier que les données existent
    if (!playerData) {
      throw new Error('Les données pour les joueurs ne sont pas disponibles.');
    }

    const maxEngramPoints = playerData.maxEngramPoints;
    const maxLevel = playerData.maxEngramLevels;

    let engramPointsText = '';
    const averagePointsPerLevel = maxEngramPoints / maxLevel;
    const minPointsPerLevel = Math.floor(averagePointsPerLevel * 0.4); // 50% de la moyenne pour les premiers niveaux
    const maxPointsPerLevel = Math.ceil(averagePointsPerLevel * 1.6); // 200% de la moyenne pour les derniers niveaux

    let totalAssignedPoints = 0;
    const engramPointsArray: { level: number, points: number }[] = [];

    for (let level = 1; level <= maxLevel; level++) {
      let ratio = level / maxLevel; // Ratio du niveau actuel sur le total des niveaux
      let pointsForThisLevel = Math.floor(minPointsPerLevel + ratio * (maxPointsPerLevel - minPointsPerLevel));

      // Assurer que les points restants ne soient pas dépassés
      if (totalAssignedPoints + pointsForThisLevel > maxEngramPoints) {
        pointsForThisLevel = maxEngramPoints - totalAssignedPoints;
      }

      totalAssignedPoints += pointsForThisLevel;
      engramPointsText += `OverridePlayerLevelEngramPoints=${pointsForThisLevel}\n`;
      engramPointsArray.push({ level, points: pointsForThisLevel });
    }
    // Sauvegarder le texte et le tableau générés dans le service
    this.storageService.setEngramPointsText(engramPointsText);
    this.storageService.setEngramPointsArray(engramPointsArray);
  }
}
