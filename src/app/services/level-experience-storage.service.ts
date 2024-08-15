import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelExperienceStorageService {
  // BehaviorSubject pour les données d'expérience des niveaux
  private playerLevelExperienceSubject = new BehaviorSubject<any>(null);
  playerLevelExperience$ = this.playerLevelExperienceSubject.asObservable();

  private dinoTamedLevelExperienceSubject = new BehaviorSubject<any>(null);
  dinoTamedLevelExperience$ = this.dinoTamedLevelExperienceSubject.asObservable();

  private dinoWildLevelExperienceSubject = new BehaviorSubject<any>(null);
  dinoWildLevelExperience$ = this.dinoWildLevelExperienceSubject.asObservable();

  private dinoTamedAffinityLevelExperienceSubject = new BehaviorSubject<any>(null);
  dinoTamedAffinityLevelExperience$ = this.dinoTamedAffinityLevelExperienceSubject.asObservable();

  // BehaviorSubject pour les textes générés
  private playerMultiplierTextSubject = new BehaviorSubject<string | null>(null);
  playerMultiplierText$ = this.playerMultiplierTextSubject.asObservable();

  private dinoWildMultiplierTextSubject = new BehaviorSubject<string | null>(null);
  dinoWildMultiplierText$ = this.dinoWildMultiplierTextSubject.asObservable();

  private dinoTamedMultiplierTextSubject = new BehaviorSubject<string | null>(null);
  dinoTamedMultiplierText$ = this.dinoTamedMultiplierTextSubject.asObservable();

  private dinoTamedAffinityMultiplierTextSubject = new BehaviorSubject<string | null>(null);
  dinoTamedAffinityMultiplierText$ = this.dinoTamedAffinityMultiplierTextSubject.asObservable();

  constructor() { }

  // Getter et Setter pour les données d'expérience des niveaux du joueur
  getPlayerLevelExperience(): any {
    return this.playerLevelExperienceSubject.getValue();
  }

  setPlayerLevelExperience(data: any): void {
    this.playerLevelExperienceSubject.next(data);
  }

  // Getter et Setter pour les données d'expérience des niveaux des dinos apprivoisés
  getDinoTamedLevelExperience(): any {
    return this.dinoTamedLevelExperienceSubject.getValue();
  }

  setDinoTamedLevelExperience(data: any): void {
    this.dinoTamedLevelExperienceSubject.next(data);
  }

  // Getter et Setter pour les données d'expérience des niveaux des dinos sauvages
  getDinoWildLevelExperience(): any {
    return this.dinoWildLevelExperienceSubject.getValue();
  }

  setDinoWildLevelExperience(data: any): void {
    this.dinoWildLevelExperienceSubject.next(data);
  }

  // Getter et Setter pour les données d'expérience des niveaux des dinos apprivoisés (affinité)
  getDinoTamedAffinityLevelExperience(): any {
    return this.dinoTamedAffinityLevelExperienceSubject.getValue();
  }

  setDinoTamedAffinityLevelExperience(data: any): void {
    this.dinoTamedAffinityLevelExperienceSubject.next(data);
  }

  // Getter et Setter pour le texte du multiplicateur des joueurs
  getPlayerMultiplierText(): string | null {
    return this.playerMultiplierTextSubject.getValue();
  }

  setPlayerMultiplierText(text: string): void {
    this.playerMultiplierTextSubject.next(text);
  }

  // Getter et Setter pour le texte du multiplicateur des dinos sauvages
  getDinoWildMultiplierText(): string | null {
    return this.dinoWildMultiplierTextSubject.getValue();
  }

  setDinoWildMultiplierText(text: string): void {
    this.dinoWildMultiplierTextSubject.next(text);
  }

  // Getter et Setter pour le texte du multiplicateur des dinos apprivoisés
  getDinoTamedMultiplierText(): string | null {
    return this.dinoTamedMultiplierTextSubject.getValue();
  }

  setDinoTamedMultiplierText(text: string): void {
    this.dinoTamedMultiplierTextSubject.next(text);
  }

  // Getter et Setter pour le texte du multiplicateur des dinos apprivoisés (affinité)
  getDinoTamedAffinityMultiplierText(): string | null {
    return this.dinoTamedAffinityMultiplierTextSubject.getValue();
  }

  setDinoTamedAffinityMultiplierText(text: string): void {
    this.dinoTamedAffinityMultiplierTextSubject.next(text);
  }

  // Méthode pour réinitialiser les données d'expérience des niveaux
  resetLevelExperience(): void {
    this.playerLevelExperienceSubject.next(null);
    this.dinoTamedLevelExperienceSubject.next(null);
    this.dinoWildLevelExperienceSubject.next(null);
    this.dinoTamedAffinityLevelExperienceSubject.next(null);

    // Réinitialiser également les textes générés
    this.playerMultiplierTextSubject.next(null);
    this.dinoWildMultiplierTextSubject.next(null);
    this.dinoTamedMultiplierTextSubject.next(null);
    this.dinoTamedAffinityMultiplierTextSubject.next(null);
  }
}
