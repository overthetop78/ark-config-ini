import { Injectable } from "@angular/core";
import { StructureSettingsStorageService } from "src/app/services/structure-settings-storage.service";

@Injectable({
  providedIn: 'root'
})
export class StructureSettingsTextGenerator {
  private structureSettingsStorageService: StructureSettingsStorageService;

  constructor(structureSettingsStorageService: StructureSettingsStorageService) {
    this.structureSettingsStorageService = structureSettingsStorageService;
  }

  // Méthode pour générer le texte formaté à partir des paramètres de recette
  generateText(): void {
    // Récupérer les paramètres depuis le service de stockage
    const params = this.structureSettingsStorageService.getStructureSettingsData();
    console.log(params);

    // Créer le texte formaté
    const formattedText = params.map(param => {
      return `${param.key}=${param.value}`;
    }).join('\n');
    console.log(formattedText);

    // Sauvegarder le texte généré
    this.structureSettingsStorageService.setStructureSettingsText(formattedText);
  }
}
