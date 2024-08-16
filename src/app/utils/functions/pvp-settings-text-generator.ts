import { Injectable } from "@angular/core";
import { PvpSettingsStorageService } from "src/app/services/pvp-settings-storage.service";

@Injectable({
  providedIn: 'root'
})
export class PvpSettingsTextGenerator {
  private pvpSettingsStorageService: PvpSettingsStorageService;

  constructor(pvpSettingsStorageService: PvpSettingsStorageService) {
    this.pvpSettingsStorageService = pvpSettingsStorageService;
  }

  // Méthode pour générer le texte formaté à partir des paramètres PvE
  generateText(): void {
    // Récupérer les paramètres depuis le service de stockage
    const params = this.pvpSettingsStorageService.getPvpSettingsData();

    // Créer le texte formaté
    const formattedText = params.map(param => {
      return `${param.key}=${param.value}`;
    }).join('\n');
    // Sauvegarder le texte généré
    this.pvpSettingsStorageService.setPvpSettingsText(formattedText);
  }
}
