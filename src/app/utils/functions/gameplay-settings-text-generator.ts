import { Injectable } from "@angular/core";
import { GameplaySettingsStorageService } from "src/app/services/gameplay-settings-storage.service";

@Injectable({
  providedIn: 'root'
})
export class GameplaySettingsTextGenerator {
  private gameplaySettingsStorageService: GameplaySettingsStorageService;

  constructor(gameplaySettingsStorageService: GameplaySettingsStorageService) {
    this.gameplaySettingsStorageService = gameplaySettingsStorageService;
  }

  // Méthode pour générer le texte formaté à partir des paramètres de jeu
  generateText(): void {
    // Récupérer les paramètres depuis le service de stockage
    const params = this.gameplaySettingsStorageService.getGameplaySettingsData();
    console.log(params);

    // Créer le texte formaté
    const formattedText = params.map(param => {
      return `${param.key}=${param.value}`;
    }).join('\n');
    console.log(formattedText);

    // Sauvegarder le texte généré
    this.gameplaySettingsStorageService.setGameplaySettingsText(formattedText);
  }
}
