import { Injectable } from '@angular/core';
import { DinoSpawnStorageService } from 'src/app/services/dino-spawn-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DinoSpawnTextGenerator {

  constructor(private dinoSpawnStorageService: DinoSpawnStorageService) { }

  generateDinoSpawnText(): string {
    const dinoSpawnData = this.dinoSpawnStorageService.getDinoSpawnData();
    if (!dinoSpawnData || dinoSpawnData.length === 0) {
      throw new Error('Aucune donnée de spawn des dinosaures n\'est disponible.');
    }

    let configText = '';

    dinoSpawnData.forEach(dino => {
      const overrideSpawnLimitPercentage = dino.overrideSpawnLimitPercentage ? 'True' : 'False';
      configText += `DinoSpawnWeightMultipliers=(DinoNameTag=${dino.dinoNameTag},SpawnWeightMultiplier=${dino.spawnWeightMultiplier},OverrideSpawnLimitPercentage=${overrideSpawnLimitPercentage},SpawnLimitPercentage=${dino.spawnLimitPercentage})\n`;
    });

    configText = configText.trim();
    this.dinoSpawnStorageService.setDinoSpawnText(configText); // Sauvegarder le texte généré dans le service
    return configText;
  }
}
