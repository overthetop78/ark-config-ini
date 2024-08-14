// dino-spawn-storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DinoSpawnStorageService {
  private dinoSpawnData: any[] = [];
  private dinoSpawnText: string = ''; // Stocke le texte généré

  constructor() { }

  // Getter pour récupérer les données de spawn des dinosaures
  getDinoSpawnData(): any[] {
    return this.dinoSpawnData;
  }

  // Setter pour sauvegarder les données de spawn des dinosaures
  setDinoSpawnData(data: any[]): void {
    this.dinoSpawnData = data;
  }

  // Getter pour récupérer le texte généré
  getDinoSpawnText(): string {
    return this.dinoSpawnText;
  }

  // Setter pour sauvegarder le texte généré
  setDinoSpawnText(text: string): void {
    this.dinoSpawnText = text;
  }

  // Méthode pour réinitialiser les données de spawn des dinosaures
  resetDinoSpawnData(): void {
    this.dinoSpawnData = [];
    this.dinoSpawnText = '';
  }
}
