import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceSettingsStorageService {
  // Utilisation de BehaviorSubject pour rendre les données réactives
  private resourceSettingsDataSubject = new BehaviorSubject<any[]>([]);
  resourceSettingsData$ = this.resourceSettingsDataSubject.asObservable();

  private resourceSettingsTextSubject = new BehaviorSubject<string>('');
  resourceSettingsText$ = this.resourceSettingsTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données des paramètres de recette
  getResourceSettingsData(): any[] {
    return this.resourceSettingsDataSubject.getValue();
  }

  // Setter pour sauvegarder les données des paramètres de recette
  setResourceSettingsData(data: any[]): void {
    this.resourceSettingsDataSubject.next(data);
  }

  // Getter pour récupérer le texte associé aux paramètres de recette
  getResourceSettingsText(): string {
    return this.resourceSettingsTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte associé aux paramètres de recette
  setResourceSettingsText(text: string): void {
    this.resourceSettingsTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données et le texte des paramètres de recette
  resetResourceSettingsData(): void {
    this.resourceSettingsDataSubject.next([]);
    this.resourceSettingsTextSubject.next('');
  }
}
