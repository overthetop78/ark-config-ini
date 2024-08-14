import { Injectable } from "@angular/core";
import { BreedingSettingsStorageService } from "src/app/services/breeding-settings-storage.service";

@Injectable({
  providedIn: 'root'
})
export class BreedingSettingsTextGenerator {
  private breedingStettingsStorageService: BreedingSettingsStorageService;

  constructor(breedingSettingsStorageService: BreedingSettingsStorageService) {
    this.breedingStettingsStorageService = breedingSettingsStorageService;
  }

  // Méthode pour générer le texte formaté à partir des paramètres
  generateText(): void {
    // Récupérer les paramètres depuis le service de stockage
    const params = this.breedingStettingsStorageService.getBreedingSettingsData();
    console.log(params);

    // Créer le texte formaté
    const formattedText = params.map(param => {
      return `${param.key}=${param.value}`;
    }).join('\n');
    // Sauvegarder le texte généré
    this.breedingStettingsStorageService.setBreedingSettingsText(formattedText);
  }
}
