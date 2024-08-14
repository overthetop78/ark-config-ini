import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LootSettingsStorageService {
  private lootSettingsData: any[] = [];
  private lootSettingsText: string = ''; // Stocke le texte associé

  constructor() { }

  // Getter pour récupérer les données des paramètres de loot
  getLootSettingsData(): any[] {
    return this.lootSettingsData;
  }

  // Setter pour sauvegarder les données des paramètres de loot
  setLootSettingsData(data: any[]): void {
    this.lootSettingsData = data;
  }

  // Getter pour récupérer le texte associé aux paramètres de loot
  getLootSettingsText(): string {
    return this.lootSettingsText;
  }

  // Setter pour sauvegarder le texte associé aux paramètres de loot
  setLootSettingsText(text: string): void {
    this.lootSettingsText = text;
  }

  // Méthode pour réinitialiser les données et le texte des paramètres de loot
  resetLootSettingsData(): void {
    this.lootSettingsData = [];
    this.lootSettingsText = '';
  }
}
