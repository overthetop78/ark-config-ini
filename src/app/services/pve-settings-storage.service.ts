import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PveSettingsStorageService {
  // BehaviorSubjects pour les données et le texte associé
  private pveSettingsDataSubject = new BehaviorSubject<any[]>([]);
  pveSettingsData$ = this.pveSettingsDataSubject.asObservable();

  private pveSettingsTextSubject = new BehaviorSubject<string>('');
  pveSettingsText$ = this.pveSettingsTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données des paramètres PvE
  getPveSettingsData(): any[] {
    return this.pveSettingsDataSubject.getValue();
  }

  // Setter pour sauvegarder les données des paramètres PvE
  setPveSettingsData(data: any[]): void {
    this.pveSettingsDataSubject.next(data);
  }

  // Getter pour récupérer le texte associé aux paramètres PvE
  getPveSettingsText(): string {
    return this.pveSettingsTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte associé aux paramètres PvE
  setPveSettingsText(text: string): void {
    this.pveSettingsTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données et le texte des paramètres PvE
  resetPveSettingsData(): void {
    this.pveSettingsDataSubject.next([]);
    this.pveSettingsTextSubject.next('');
  }
}
