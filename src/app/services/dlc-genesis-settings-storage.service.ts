import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DLCGenesisSettingsStorageService {
  // Utilisation de BehaviorSubject pour les données des paramètres
  private dlcGenesisSettingsDataSubject = new BehaviorSubject<any[]>([]);
  dlcGenesisSettingsData$ = this.dlcGenesisSettingsDataSubject.asObservable();

  // Utilisation de BehaviorSubject pour le texte associé aux paramètres
  private dlcGenesisSettingsTextSubject = new BehaviorSubject<string>('');
  dlcGenesisSettingsText$ = this.dlcGenesisSettingsTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données des paramètres des DLCGenesisS
  getDLCGenesisSettingsData(): any[] {
    return this.dlcGenesisSettingsDataSubject.getValue();
  }

  // Setter pour sauvegarder les données des paramètres des DLCGenesisS
  setDLCGenesisSettingsData(data: any[]): void {
    this.dlcGenesisSettingsDataSubject.next(data);
  }

  // Getter pour récupérer le texte associé aux paramètres des DLCGenesisS
  getDLCGenesisSettingsText(): string {
    return this.dlcGenesisSettingsTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte associé aux paramètres des DLCGenesisS
  setDLCGenesisSettingsText(text: string): void {
    this.dlcGenesisSettingsTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données et le texte des paramètres des DLCGenesisS
  resetDLCGenesisSettingsData(): void {
    this.dlcGenesisSettingsDataSubject.next([]);
    this.dlcGenesisSettingsTextSubject.next('');
  }
}
