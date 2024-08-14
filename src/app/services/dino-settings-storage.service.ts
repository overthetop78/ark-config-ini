import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DinoSettingsStorageService {
  private dinoSettingsData: any[] = [];
  private dinoSettingsText: string = ''; // Stocke le texte généré

  constructor() { }

  // Getter pour récupérer les données de réglages des dinosaures
  getDinoSettingsData(): any[] {
    return this.dinoSettingsData;
  }

  // Setter pour sauvegarder les données de réglages des dinosaures
  setDinoSettingsData(data: any[]): void {
    this.dinoSettingsData = data;
  }

  // Getter pour récupérer le texte généré
  getDinoSettingsText(): string {
    return this.dinoSettingsText;
  }

  // Setter pour sauvegarder le texte généré
  setDinoSettingsText(text: string): void {
    this.dinoSettingsText = text;
  }

  // Méthode pour réinitialiser les données de réglages des dinosaures
  resetDinoSettingsData(): void {
    this.dinoSettingsData = [];
    this.dinoSettingsText = '';
  }
}
