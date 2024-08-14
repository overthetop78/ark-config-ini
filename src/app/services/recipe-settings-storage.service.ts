import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeSettingsStorageService {
  private recipeSettingsData: any[] = [];
  private recipeSettingsText: string = ''; // Stocke le texte associé

  constructor() { }

  // Getter pour récupérer les données des paramètres de recette
  getRecipeSettingsData(): any[] {
    return this.recipeSettingsData;
  }

  // Setter pour sauvegarder les données des paramètres de recette
  setRecipeSettingsData(data: any[]): void {
    this.recipeSettingsData = data;
  }

  // Getter pour récupérer le texte associé aux paramètres de recette
  getRecipeSettingsText(): string {
    return this.recipeSettingsText;
  }

  // Setter pour sauvegarder le texte associé aux paramètres de recette
  setRecipeSettingsText(text: string): void {
    this.recipeSettingsText = text;
  }

  // Méthode pour réinitialiser les données et le texte des paramètres de recette
  resetRecipeSettingsData(): void {
    this.recipeSettingsData = [];
    this.recipeSettingsText = '';
  }
}
