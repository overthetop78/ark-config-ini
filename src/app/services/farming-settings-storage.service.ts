import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmingSettingsStorageService {
  // BehaviorSubject pour les données des paramètres de culture
  private farmingSettingsDataSubject = new BehaviorSubject<any[]>([]);
  farmingSettingsData$ = this.farmingSettingsDataSubject.asObservable();

  // BehaviorSubject pour le texte associé aux paramètres de culture
  private farmingSettingsTextSubject = new BehaviorSubject<string>('');
  farmingSettingsText$ = this.farmingSettingsTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données des paramètres de culture
  getFarmingSettingsData(): any[] {
    return this.farmingSettingsDataSubject.getValue();
  }

  // Setter pour sauvegarder les données des paramètres de culture
  setFarmingSettingsData(data: any[]): void {
    this.farmingSettingsDataSubject.next(data);
  }

  // Getter pour récupérer le texte associé aux paramètres de culture
  getFarmingSettingsText(): string {
    return this.farmingSettingsTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte associé aux paramètres de culture
  setFarmingSettingsText(text: string): void {
    this.farmingSettingsTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données et le texte des paramètres de culture
  resetFarmingSettingsData(): void {
    this.farmingSettingsDataSubject.next([]);
    this.farmingSettingsTextSubject.next('');
  }
}
