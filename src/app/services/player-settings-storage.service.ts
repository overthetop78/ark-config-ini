import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerSettingsStorageService {
  private playerSettingsData: any[] = [];
  private playerSettingsText: string = ''; // Stocke le texte associé

  constructor() { }

  // Getter pour récupérer les données des paramètres de player
  getPlayerSettingsData(): any[] {
    return this.playerSettingsData;
  }

  // Setter pour sauvegarder les données des paramètres de player
  setPlayerSettingsData(data: any[]): void {
    this.playerSettingsData = data;
  }

  // Getter pour récupérer le texte associé aux paramètres de player
  getPlayerSettingsText(): string {
    return this.playerSettingsText;
  }

  // Setter pour sauvegarder le texte associé aux paramètres de player
  setPlayerSettingsText(text: string): void {
    this.playerSettingsText = text;
  }

  // Méthode pour réinitialiser les données et le texte des paramètres de player
  resetPlayerSettingsData(): void {
    this.playerSettingsData = [];
    this.playerSettingsText = '';
  }
}
