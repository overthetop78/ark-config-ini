import { Injectable } from "@angular/core";
import { PlayerSettingsStorageService } from "src/app/services/player-settings-storage.service";

@Injectable({
  providedIn: 'root'
})
export class PlayerSettingsTextGenerator {
  private playerSettingsStorageService: PlayerSettingsStorageService;

  constructor(playerSettingsStorageService: PlayerSettingsStorageService) {
    this.playerSettingsStorageService = playerSettingsStorageService;
  }

  // Méthode pour générer le texte formaté à partir des paramètres de player
  generateText(): void {
    // Récupérer les paramètres depuis le service de stockage
    const params = this.playerSettingsStorageService.getPlayerSettingsData();
    console.log(params);

    // Créer le texte formaté
    const formattedText = params.map(param => {
      return `${param.key}=${param.value}`;
    }).join('\n');
    // Sauvegarder le texte généré
    this.playerSettingsStorageService.setPlayerSettingsText(formattedText);
  }
}
