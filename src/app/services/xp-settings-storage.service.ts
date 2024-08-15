import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XpSettingsStorageService {
  // Utilisation de BehaviorSubject pour les données des paramètres des XPs
  private xpSettingsDataSubject = new BehaviorSubject<any[]>([]);
  xpSettingsData$ = this.xpSettingsDataSubject.asObservable();

  // Utilisation de BehaviorSubject pour le texte associé aux paramètres des XPs
  private xpSettingsTextSubject = new BehaviorSubject<string>('');
  xpSettingsText$ = this.xpSettingsTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données des paramètres des XPs
  getXPSettingsData(): any[] {
    return this.xpSettingsDataSubject.getValue();
  }

  // Setter pour sauvegarder les données des paramètres des XPs
  setXPSettingsData(data: any[]): void {
    this.xpSettingsDataSubject.next(data);
  }

  // Getter pour récupérer le texte associé aux paramètres des XPs
  getXPSettingsText(): string {
    return this.xpSettingsTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte associé aux paramètres des XPs
  setXPSettingsText(text: string): void {
    this.xpSettingsTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données et le texte des paramètres des XPs
  resetXPSettingsData(): void {
    this.xpSettingsDataSubject.next([]);
    this.xpSettingsTextSubject.next('');
  }
}
