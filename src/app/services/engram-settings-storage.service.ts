import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngramSettingsStorageService {
  // Utilisation de BehaviorSubject pour les données des paramètres
  private engramSettingsDataSubject = new BehaviorSubject<any[]>([]);
  engramSettingsData$ = this.engramSettingsDataSubject.asObservable();

  // Utilisation de BehaviorSubject pour le texte associé aux paramètres
  private engramSettingsTextSubject = new BehaviorSubject<string>('');
  engramSettingsText$ = this.engramSettingsTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données des paramètres des engrams
  getEngramSettingsData(): any[] {
    return this.engramSettingsDataSubject.getValue();
  }

  // Setter pour sauvegarder les données des paramètres des engrams
  setEngramSettingsData(data: any[]): void {
    this.engramSettingsDataSubject.next(data);
  }

  // Getter pour récupérer le texte associé aux paramètres des engrams
  getEngramSettingsText(): string {
    return this.engramSettingsTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte associé aux paramètres des engrams
  setEngramSettingsText(text: string): void {
    this.engramSettingsTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données et le texte des paramètres des engrams
  resetEngramSettingsData(): void {
    this.engramSettingsDataSubject.next([]);
    this.engramSettingsTextSubject.next('');
  }
}
