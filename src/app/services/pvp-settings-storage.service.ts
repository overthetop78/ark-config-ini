import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PvpSettingsStorageService {
  private pvpSettingsData: any[] = [];
  private pvpSettingsText: string = ''; // Stocke le texte associé aux paramètres PvE

  constructor() { }

  // Getter pour récupérer les données des paramètres PvE
  getPvpSettingsData(): any[] {
    return this.pvpSettingsData;
  }

  // Setter pour sauvegarder les données des paramètres PvE
  setPvpSettingsData(data: any[]): void {
    this.pvpSettingsData = data;
  }

  // Getter pour récupérer le texte associé aux paramètres PvE
  getPvpSettingsText(): string {
    return this.pvpSettingsText;
  }

  // Setter pour sauvegarder le texte associé aux paramètres PvE
  setPvpSettingsText(text: string): void {
    this.pvpSettingsText = text;
  }

  // Méthode pour réinitialiser les données et le texte des paramètres PvE
  resetPvpSettingsData(): void {
    this.pvpSettingsData = [];
    this.pvpSettingsText = '';
  }
}
