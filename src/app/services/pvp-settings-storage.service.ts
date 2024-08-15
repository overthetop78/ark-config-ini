import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PvpSettingsStorageService {
  // BehaviorSubjects pour les données et le texte associé
  private pvpSettingsDataSubject = new BehaviorSubject<any[]>([]);
  pvpSettingsData$ = this.pvpSettingsDataSubject.asObservable();

  private pvpSettingsTextSubject = new BehaviorSubject<string>('');
  pvpSettingsText$ = this.pvpSettingsTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données des paramètres PvP
  getPvpSettingsData(): any[] {
    return this.pvpSettingsDataSubject.getValue();
  }

  // Setter pour sauvegarder les données des paramètres PvP
  setPvpSettingsData(data: any[]): void {
    this.pvpSettingsDataSubject.next(data);
  }

  // Getter pour récupérer le texte associé aux paramètres PvP
  getPvpSettingsText(): string {
    return this.pvpSettingsTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte associé aux paramètres PvP
  setPvpSettingsText(text: string): void {
    this.pvpSettingsTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données et le texte des paramètres PvP
  resetPvpSettingsData(): void {
    this.pvpSettingsDataSubject.next([]);
    this.pvpSettingsTextSubject.next('');
  }
}
