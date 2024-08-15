import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StructureSettingsStorageService {
  // Utilisation de BehaviorSubject pour les données des paramètres de structure
  private structureSettingsDataSubject = new BehaviorSubject<any[]>([]);
  structureSettingsData$ = this.structureSettingsDataSubject.asObservable();

  // Utilisation de BehaviorSubject pour le texte des paramètres de structure
  private structureSettingsTextSubject = new BehaviorSubject<string>('');
  structureSettingsText$ = this.structureSettingsTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données des paramètres de structure
  getStructureSettingsData(): any[] {
    return this.structureSettingsDataSubject.getValue();
  }

  // Setter pour sauvegarder les données des paramètres de structure
  setStructureSettingsData(data: any[]): void {
    this.structureSettingsDataSubject.next(data);
  }

  // Getter pour récupérer le texte associé aux paramètres de structure
  getStructureSettingsText(): string {
    return this.structureSettingsTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte associé aux paramètres de structure
  setStructureSettingsText(text: string): void {
    this.structureSettingsTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données et le texte des paramètres de structure
  resetStructureSettingsData(): void {
    this.structureSettingsDataSubject.next([]);
    this.structureSettingsTextSubject.next('');
  }
}
