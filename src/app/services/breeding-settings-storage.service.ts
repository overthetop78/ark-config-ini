import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedingSettingsStorageService {
  // Utilisation de BehaviorSubject pour les données de réglages de reproduction
  private breedingSettingsDataSubject = new BehaviorSubject<any[]>([]);
  breedingSettingsData$ = this.breedingSettingsDataSubject.asObservable();

  // Utilisation de BehaviorSubject pour le texte généré
  private breedingSettingsTextSubject = new BehaviorSubject<string>('');
  breedingSettingsText$ = this.breedingSettingsTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données de réglages de reproduction
  getBreedingSettingsData(): any[] {
    return this.breedingSettingsDataSubject.getValue();
  }

  // Setter pour sauvegarder les données de réglages de reproduction
  setBreedingSettingsData(data: any[]): void {
    this.breedingSettingsDataSubject.next(data);
  }

  // Getter pour récupérer le texte généré
  getBreedingSettingsText(): string {
    return this.breedingSettingsTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte généré
  setBreedingSettingsText(text: string): void {
    this.breedingSettingsTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données de réglages de reproduction
  resetBreedingSettingsData(): void {
    this.breedingSettingsDataSubject.next([]);
    this.breedingSettingsTextSubject.next('');
  }
}
