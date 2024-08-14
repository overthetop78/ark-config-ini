import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StructureSettingsStorageService {
  private structureSettingsData: any[] = [];
  private structureSettingsText: string = ''; // Stocke le texte associé

  constructor() { }

  // Getter pour récupérer les données des paramètres de recette
  getStructureSettingsData(): any[] {
    return this.structureSettingsData;
  }

  // Setter pour sauvegarder les données des paramètres de recette
  setStructureSettingsData(data: any[]): void {
    this.structureSettingsData = data;
  }

  // Getter pour récupérer le texte associé aux paramètres de recette
  getStructureSettingsText(): string {
    return this.structureSettingsText;
  }

  // Setter pour sauvegarder le texte associé aux paramètres de recette
  setStructureSettingsText(text: string): void {
    this.structureSettingsText = text;
  }

  // Méthode pour réinitialiser les données et le texte des paramètres de recette
  resetStructureSettingsData(): void {
    this.structureSettingsData = [];
    this.structureSettingsText = '';
  }
}
