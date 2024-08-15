import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeSettingsStorageService {
  // BehaviorSubjects pour les données et le texte associé
  private recipeSettingsDataSubject = new BehaviorSubject<any[]>([]);
  recipeSettingsData$ = this.recipeSettingsDataSubject.asObservable();

  private recipeSettingsTextSubject = new BehaviorSubject<string>('');
  recipeSettingsText$ = this.recipeSettingsTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données des paramètres de recette
  getRecipeSettingsData(): any[] {
    return this.recipeSettingsDataSubject.getValue();
  }

  // Setter pour sauvegarder les données des paramètres de recette
  setRecipeSettingsData(data: any[]): void {
    this.recipeSettingsDataSubject.next(data);
  }

  // Getter pour récupérer le texte associé aux paramètres de recette
  getRecipeSettingsText(): string {
    return this.recipeSettingsTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte associé aux paramètres de recette
  setRecipeSettingsText(text: string): void {
    this.recipeSettingsTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données et le texte des paramètres de recette
  resetRecipeSettingsData(): void {
    this.recipeSettingsDataSubject.next([]);
    this.recipeSettingsTextSubject.next('');
  }
}
