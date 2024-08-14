import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceSettingsStorageService {
  private resourceSettingsData: any[] = [];
  private resourceSettingsText: string = ''; // Stocke le texte associé

  constructor() { }

  // Getter pour récupérer les données des paramètres de recette
  getResourceSettingsData(): any[] {
    return this.resourceSettingsData;
  }

  // Setter pour sauvegarder les données des paramètres de recette
  setResourceSettingsData(data: any[]): void {
    this.resourceSettingsData = data;
  }

  // Getter pour récupérer le texte associé aux paramètres de recette
  getResourceSettingsText(): string {
    return this.resourceSettingsText;
  }

  // Setter pour sauvegarder le texte associé aux paramètres de recette
  setResourceSettingsText(text: string): void {
    this.resourceSettingsText = text;
  }

  // Méthode pour réinitialiser les données et le texte des paramètres de recette
  resetResourceSettingsData(): void {
    this.resourceSettingsData = [];
    this.resourceSettingsText = '';
  }
}
