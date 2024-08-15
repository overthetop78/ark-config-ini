import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DinoSpawnStorageService {
  // Utilisation de BehaviorSubject pour les données de spawn des dinosaures
  private dinoSpawnDataSubject = new BehaviorSubject<any[]>([]);
  dinoSpawnData$ = this.dinoSpawnDataSubject.asObservable();

  // Utilisation de BehaviorSubject pour le texte généré
  private dinoSpawnTextSubject = new BehaviorSubject<string>('');
  dinoSpawnText$ = this.dinoSpawnTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer les données de spawn des dinosaures
  getDinoSpawnData(): any[] {
    return this.dinoSpawnDataSubject.getValue();
  }

  // Setter pour sauvegarder les données de spawn des dinosaures
  setDinoSpawnData(data: any[]): void {
    this.dinoSpawnDataSubject.next(data);
  }

  // Getter pour récupérer le texte généré
  getDinoSpawnText(): string {
    return this.dinoSpawnTextSubject.getValue();
  }

  // Setter pour sauvegarder le texte généré
  setDinoSpawnText(text: string): void {
    this.dinoSpawnTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données de spawn des dinosaures
  resetDinoSpawnData(): void {
    this.dinoSpawnDataSubject.next([]);
    this.dinoSpawnTextSubject.next('');
  }
}
