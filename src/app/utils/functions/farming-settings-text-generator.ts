import { Injectable } from "@angular/core";
import { FarmingSettingsStorageService } from "src/app/services/farming-settings-storage.service";


@Injectable({
  providedIn: 'root'
})
export class FarmingSettingsTextGenerator {
  private farmingSettingsStorageService: FarmingSettingsStorageService;

  constructor(farmingSettingsStorageService: FarmingSettingsStorageService) {
    this.farmingSettingsStorageService = farmingSettingsStorageService;
  }

  // Méthode pour générer le texte formaté à partir des paramètres de culture
  generateText(): void {
    // Récupérer les paramètres depuis le service de stockage
    const params = this.farmingSettingsStorageService.getFarmingSettingsData();

    // Créer le texte formaté
    const formattedText = params.map(param => {
      return `${param.key}=${param.defaultValue}`; // Utilise la valeur par défaut pour chaque paramètre
    }).join('\n');

    // Sauvegarder le texte généré
    this.farmingSettingsStorageService.setFarmingSettingsText(formattedText);
  }
}
