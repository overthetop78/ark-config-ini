import { Injectable } from "@angular/core";
import { ResourceSettingsStorageService } from "src/app/services/resource-settings-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ResourceSettingsTextGenerator {
  private resourceSettingsStorageService: ResourceSettingsStorageService;

  constructor(resourceSettingsStorageService: ResourceSettingsStorageService) {
    this.resourceSettingsStorageService = resourceSettingsStorageService;
  }

  // Méthode pour générer le texte formaté à partir des paramètres de recette
  generateText(): void {
    // Récupérer les paramètres depuis le service de stockage
    const params = this.resourceSettingsStorageService.getResourceSettingsData();
    console.log(params);

    // Créer le texte formaté
    const formattedText = params.map(param => {
      return `${param.key}=${param.value}`;
    }).join('\n');
    console.log(formattedText);

    // Sauvegarder le texte généré
    this.resourceSettingsStorageService.setResourceSettingsText(formattedText);
  }
}
