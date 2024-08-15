import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LootSettingsStorageService {
  // Utilisation de BehaviorSubject pour les données de loot et le texte
  private lootSettingsDataSubject = new BehaviorSubject<any[]>([]);
  lootSettingsData$ = this.lootSettingsDataSubject.asObservable();

  private lootSettingsTextSubject = new BehaviorSubject<string>('');
  lootSettingsText$ = this.lootSettingsTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données des paramètres de loot
  getLootSettingsData(): any[] {
    return this.lootSettingsDataSubject.getValue();
  }

  // Setter pour sauvegarder les données des paramètres de loot
  setLootSettingsData(data: any[]): void {
    this.lootSettingsDataSubject.next(data);
  }

  // Getter pour récupérer le texte associé aux paramètres de loot
  getLootSettingsText(): string {
    return this.lootSettingsTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte associé aux paramètres de loot
  setLootSettingsText(text: string): void {
    this.lootSettingsTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données et le texte des paramètres de loot
  resetLootSettingsData(): void {
    this.lootSettingsDataSubject.next([]);
    this.lootSettingsTextSubject.next('');
  }
}
