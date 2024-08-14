import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreedingSettingsStorageService {
  private breedingSettingsData: any[] = [];
  private breedingSettingsText: string = ''; // Stocke le texte généré

  constructor() { }

  // Getter pour récupérer les données de réglages de reproduction
  getBreedingSettingsData(): any[] {
    return this.breedingSettingsData;
  }

  // Setter pour sauvegarder les données de réglages de reproduction
  setBreedingSettingsData(data: any[]): void {
    this.breedingSettingsData = data;
  }

  // Getter pour récupérer le texte généré
  getBreedingSettingsText(): string {
    return this.breedingSettingsText;
  }

  // Setter pour sauvegarder le texte généré
  setBreedingSettingsText(text: string): void {
    this.breedingSettingsText = text;
  }

  // Méthode pour réinitialiser les données de réglages de reproduction
  resetBreedingSettingsData(): void {
    this.breedingSettingsData = [];
    this.breedingSettingsText = '';
  }
}
