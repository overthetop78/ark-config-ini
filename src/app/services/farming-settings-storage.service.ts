import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FarmingSettingsStorageService {
  private farmingSettingsData: any[] = []; // Stocke les données des paramètres
  private farmingSettingsText: string = ''; // Stocke le texte associé aux paramètres

  constructor() { }

  // Getter pour récupérer les données des paramètres de culture
  getFarmingSettingsData(): any[] {
    return this.farmingSettingsData;
  }

  // Setter pour sauvegarder les données des paramètres de culture
  setFarmingSettingsData(data: any[]): void {
    this.farmingSettingsData = data;
  }

  // Getter pour récupérer le texte associé aux paramètres de culture
  getFarmingSettingsText(): string {
    return this.farmingSettingsText;
  }

  // Setter pour sauvegarder le texte associé aux paramètres de culture
  setFarmingSettingsText(text: string): void {
    this.farmingSettingsText = text;
  }

  // Méthode pour réinitialiser les données et le texte des paramètres de culture
  resetFarmingSettingsData(): void {
    this.farmingSettingsData = [];
    this.farmingSettingsText = '';
  }
}
