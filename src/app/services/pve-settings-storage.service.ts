import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PveSettingsStorageService {
  private pveSettingsData: any[] = [];
  private pveSettingsText: string = ''; // Stocke le texte associé aux paramètres PvE

  constructor() { }

  // Getter pour récupérer les données des paramètres PvE
  getPveSettingsData(): any[] {
    return this.pveSettingsData;
  }

  // Setter pour sauvegarder les données des paramètres PvE
  setPveSettingsData(data: any[]): void {
    this.pveSettingsData = data;
  }

  // Getter pour récupérer le texte associé aux paramètres PvE
  getPveSettingsText(): string {
    return this.pveSettingsText;
  }

  // Setter pour sauvegarder le texte associé aux paramètres PvE
  setPveSettingsText(text: string): void {
    this.pveSettingsText = text;
  }

  // Méthode pour réinitialiser les données et le texte des paramètres PvE
  resetPveSettingsData(): void {
    this.pveSettingsData = [];
    this.pveSettingsText = '';
  }
}
