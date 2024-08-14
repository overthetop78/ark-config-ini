import { Injectable } from "@angular/core";
import { PveSettingsStorageService } from "src/app/services/pve-settings-storage.service";

@Injectable({
  providedIn: 'root'
})
export class PveSettingsTextGenerator {
  private pveSettingsStorageService: PveSettingsStorageService;

  constructor(pveSettingsStorageService: PveSettingsStorageService) {
    this.pveSettingsStorageService = pveSettingsStorageService;
  }

  // Méthode pour générer le texte formaté à partir des paramètres PvE
  generateText(): void {
    // Récupérer les paramètres depuis le service de stockage
    const params = this.pveSettingsStorageService.getPveSettingsData();
    console.log(params);

    // Créer le texte formaté
    const formattedText = params.map(param => {
      return `${param.key}=${param.value}`;
    }).join('\n');
    // Sauvegarder le texte généré
    this.pveSettingsStorageService.setPveSettingsText(formattedText);
  }
}
