import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DinoSettingsStorageService {
  // Utilisation de BehaviorSubject pour les données de réglages des dinosaures
  private dinoSettingsDataSubject = new BehaviorSubject<any[]>([]);
  dinoSettingsData$ = this.dinoSettingsDataSubject.asObservable();

  // Utilisation de BehaviorSubject pour le texte généré
  private dinoSettingsTextSubject = new BehaviorSubject<string>('');
  dinoSettingsText$ = this.dinoSettingsTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données de réglages des dinosaures
  getDinoSettingsData(): any[] {
    return this.dinoSettingsDataSubject.getValue();
  }

  // Setter pour sauvegarder les données de réglages des dinosaures
  setDinoSettingsData(data: any[]): void {
    this.dinoSettingsDataSubject.next(data);
  }

  // Getter pour récupérer le texte généré
  getDinoSettingsText(): string {
    return this.dinoSettingsTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte généré
  setDinoSettingsText(text: string): void {
    this.dinoSettingsTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données de réglages des dinosaures
  resetDinoSettingsData(): void {
    this.dinoSettingsDataSubject.next([]);
    this.dinoSettingsTextSubject.next('');
  }
}
