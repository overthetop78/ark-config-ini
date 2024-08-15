import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerSettingsStorageService {
  // Utilisation de BehaviorSubject pour les données et les textes
  private playerSettingsDataSubject = new BehaviorSubject<any[]>([]);
  playerSettingsData$ = this.playerSettingsDataSubject.asObservable();

  private playerSettingsTextSubject = new BehaviorSubject<string>('');
  playerSettingsText$ = this.playerSettingsTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données des paramètres de player
  getPlayerSettingsData(): any[] {
    return this.playerSettingsDataSubject.getValue();
  }

  // Setter pour sauvegarder les données des paramètres de player
  setPlayerSettingsData(data: any[]): void {
    this.playerSettingsDataSubject.next(data);
  }

  // Getter pour récupérer le texte associé aux paramètres de player
  getPlayerSettingsText(): string {
    return this.playerSettingsTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte associé aux paramètres de player
  setPlayerSettingsText(text: string): void {
    this.playerSettingsTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données et le texte des paramètres de player
  resetPlayerSettingsData(): void {
    this.playerSettingsDataSubject.next([]);
    this.playerSettingsTextSubject.next('');
  }
}
