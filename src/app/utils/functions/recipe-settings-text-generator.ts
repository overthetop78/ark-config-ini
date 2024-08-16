import { Injectable } from "@angular/core";
import { RecipeSettingsStorageService } from "src/app/services/recipe-settings-storage.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeSettingsTextGenerator {
  private recipeSettingsStorageService: RecipeSettingsStorageService;

  constructor(recipeSettingsStorageService: RecipeSettingsStorageService) {
    this.recipeSettingsStorageService = recipeSettingsStorageService;
  }

  // Méthode pour générer le texte formaté à partir des paramètres de recette
  generateText(): void {
    // Récupérer les paramètres depuis le service de stockage
    const params = this.recipeSettingsStorageService.getRecipeSettingsData();

    // Créer le texte formaté
    const formattedText = params.map(param => {
      return `${param.key}=${param.value}`;
    }).join('\n');

    // Sauvegarder le texte généré
    this.recipeSettingsStorageService.setRecipeSettingsText(formattedText);
  }
}
