import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameplaySettingsStorageService {
  // BehaviorSubject pour les données des paramètres de jeu
  private gameplaySettingsDataSubject = new BehaviorSubject<any[]>([]);
  gameplaySettingsData$ = this.gameplaySettingsDataSubject.asObservable();

  // BehaviorSubject pour le texte associé aux paramètres de jeu
  private gameplaySettingsTextSubject = new BehaviorSubject<string>('');
  gameplaySettingsText$ = this.gameplaySettingsTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données des paramètres de jeu
  getGameplaySettingsData(): any[] {
    return this.gameplaySettingsDataSubject.getValue();
  }

  // Setter pour sauvegarder les données des paramètres de jeu
  setGameplaySettingsData(data: any[]): void {
    this.gameplaySettingsDataSubject.next(data);
  }

  // Getter pour récupérer le texte associé aux paramètres de jeu
  getGameplaySettingsText(): string {
    return this.gameplaySettingsTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte associé aux paramètres de jeu
  setGameplaySettingsText(text: string): void {
    this.gameplaySettingsTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données et le texte des paramètres de jeu
  resetGameplaySettingsData(): void {
    this.gameplaySettingsDataSubject.next([]);
    this.gameplaySettingsTextSubject.next('');
  }
}
