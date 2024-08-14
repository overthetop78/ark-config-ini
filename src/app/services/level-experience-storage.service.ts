import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelExperienceStorageService {
  private playerLevelExperience: any = null;
  private dinoTamedLevelExperience: any = null;
  private dinoWildLevelExperience: any = null;
  private dinoTamedAffinityLevelExperience: any = null;

  // Variables pour stocker les textes générés
  private playerMultiplierText: string | null = null;
  private dinoWildMultiplierText: string | null = null;
  private dinoTamedMultiplierText: string | null = null;
  private dinoTamedAffinityMultiplierText: string | null = null;

  constructor() { }

  // Getter et Setter pour les données d'expérience des niveaux du joueur
  getPlayerLevelExperience(): any {
    return this.playerLevelExperience;
  }

  setPlayerLevelExperience(data: any): void {
    this.playerLevelExperience = data;
  }

  // Getter et Setter pour les données d'expérience des niveaux des dinos apprivoisés
  getDinoTamedLevelExperience(): any {
    return this.dinoTamedLevelExperience;
  }

  setDinoTamedLevelExperience(data: any): void {
    this.dinoTamedLevelExperience = data;
  }

  // Getter et Setter pour les données d'expérience des niveaux des dinos sauvages
  getDinoWildLevelExperience(): any {
    return this.dinoWildLevelExperience;
  }

  setDinoWildLevelExperience(data: any): void {
    this.dinoWildLevelExperience = data;
  }

  // Getter et Setter pour les données d'expérience des niveaux des dinos apprivoisés (affinité)
  getDinoTamedAffinityLevelExperience(): any {
    return this.dinoTamedAffinityLevelExperience;
  }

  setDinoTamedAffinityLevelExperience(data: any): void {
    this.dinoTamedAffinityLevelExperience = data;
  }

  // Getter et Setter pour le texte du multiplicateur des joueurs
  getPlayerMultiplierText(): string | null {
    return this.playerMultiplierText;
  }

  setPlayerMultiplierText(text: string): void {
    this.playerMultiplierText = text;
  }

  // Getter et Setter pour le texte du multiplicateur des dinos sauvages
  getDinoWildMultiplierText(): string | null {
    return this.dinoWildMultiplierText;
  }

  setDinoWildMultiplierText(text: string): void {
    this.dinoWildMultiplierText = text;
  }

  // Getter et Setter pour le texte du multiplicateur des dinos apprivoisés
  getDinoTamedMultiplierText(): string | null {
    return this.dinoTamedMultiplierText;
  }

  setDinoTamedMultiplierText(text: string): void {
    this.dinoTamedMultiplierText = text;
  }

  // Getter et Setter pour le texte du multiplicateur des dinos apprivoisés (affinité)
  getDinoTamedAffinityMultiplierText(): string | null {
    return this.dinoTamedAffinityMultiplierText;
  }

  setDinoTamedAffinityMultiplierText(text: string): void {
    this.dinoTamedAffinityMultiplierText = text;
  }

  // Méthode pour réinitialiser les données d'expérience des niveaux
  resetLevelExperience(): void {
    this.playerLevelExperience = null;
    this.dinoTamedLevelExperience = null;
    this.dinoWildLevelExperience = null;
    this.dinoTamedAffinityLevelExperience = null;

    // Réinitialiser également les textes générés
    this.playerMultiplierText = null;
    this.dinoWildMultiplierText = null;
    this.dinoTamedMultiplierText = null;
    this.dinoTamedAffinityMultiplierText = null;
  }
}
