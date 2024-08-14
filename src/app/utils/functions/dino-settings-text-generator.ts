import { Injectable } from "@angular/core";
import { DinoSettingsStorageService } from "src/app/services/dino-settings-storage.service";

@Injectable({
  providedIn: 'root'
})
export class DinoSettingsTextGenerator {
  constructor(private dinoSettingsStorageService: DinoSettingsStorageService) { }

  // Méthode pour générer le texte formaté à partir des paramètres
  generateText(): void {
    // Récupérer les paramètres depuis le service de stockage
    const params = this.dinoSettingsStorageService.getDinoSettingsData();

    // Créer le texte formaté
    const formattedText = params.map(param => {
      const value = typeof param.value === 'boolean'
        ? (param.value ? 'true' : 'false')
        : param.value;
      return `${param.key}=${value}`;
    }).join('\n');

    // Sauvegarder le texte généré
    this.dinoSettingsStorageService.setDinoSettingsText(formattedText);
  }
}
