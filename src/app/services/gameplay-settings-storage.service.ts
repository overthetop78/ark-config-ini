import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameplaySettingsStorageService {
  private gameplaySettingsData: any[] = [];
  private gameplaySettingsText: string = ''; // Stocke le texte associé

  constructor() { }

  // Getter pour récupérer les données des paramètres de jeu
  getGameplaySettingsData(): any[] {
    return this.gameplaySettingsData;
  }

  // Setter pour sauvegarder les données des paramètres de jeu
  setGameplaySettingsData(data: any[]): void {
    this.gameplaySettingsData = data;
  }

  // Getter pour récupérer le texte associé aux paramètres de jeu
  getGameplaySettingsText(): string {
    return this.gameplaySettingsText;
  }

  // Setter pour sauvegarder le texte associé aux paramètres de jeu
  setGameplaySettingsText(text: string): void {
    this.gameplaySettingsText = text;
  }

  // Méthode pour réinitialiser les données et le texte des paramètres de jeu
  resetGameplaySettingsData(): void {
    this.gameplaySettingsData = [];
    this.gameplaySettingsText = '';
  }
}
