import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectStorageService {
  // Utilisation de BehaviorSubject pour les données et les textes
  private objectConfigSubject = new BehaviorSubject<any[]>([]);
  objectConfig$ = this.objectConfigSubject.asObservable();

  private harvestResourceTextSubject = new BehaviorSubject<string>('');
  harvestResourceText$ = this.harvestResourceTextSubject.asObservable();

  private configOverrideTextSubject = new BehaviorSubject<string>('');
  configOverrideText$ = this.configOverrideTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données des multiplicateurs de ressources récoltées
  getObjectConfig(): any[] {
    return this.objectConfigSubject.getValue();
  }

  // Setter pour sauvegarder les données des multiplicateurs de ressources récoltées
  setObjectConfig(data: any[]): void {
    this.objectConfigSubject.next(data);
  }

  // Getter pour récupérer le texte associé aux multiplicateurs de ressources récoltées
  getHarvestResourceText(): string {
    return this.harvestResourceTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte associé aux multiplicateurs de ressources récoltées
  setHarvestResourceText(text: string): void {
    this.harvestResourceTextSubject.next(text);
  }

  // Getter pour récupérer le texte associé à la configuration des tailles de stack
  getConfigOverrideText(): string {
    return this.configOverrideTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte associé à la configuration des tailles de stack
  setConfigOverrideText(text: string): void {
    this.configOverrideTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données et les textes des configurations
  resetObjectConfigData(): void {
    this.objectConfigSubject.next([]);
    this.harvestResourceTextSubject.next('');
    this.configOverrideTextSubject.next('');
  }
}
