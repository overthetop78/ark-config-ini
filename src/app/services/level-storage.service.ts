import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelStorageService {
  private playerLevelData: any;
  private dinoLevelData: any;
  private playerExperienceText: string = '';
  private dinoExperienceText: string = '';
  private overrideMaxExperiencePointsPlayer: string = '';
  private overrideMaxExperiencePointsDino: string = '';
  private engramPointsText: string = ''; // Nouveau texte pour les points d'engrammes
  private engramPointsArray: { level: number, points: number }[] = []; // Nouveau tableau pour les points d'engrammes


  constructor() { }

  // Setter pour les données du joueur
  setPlayerLevelData(data: any) {
    this.playerLevelData = data;
  }

  // Getter pour les données du joueur
  getPlayerLevelData() {
    return this.playerLevelData;
  }

  // Setter pour les données du dino
  setDinoLevelData(data: any) {
    this.dinoLevelData = data;
  }

  // Getter pour les données du dino
  getDinoLevelData() {
    return this.dinoLevelData;
  }

  // Setter pour le texte d'expérience des joueurs
  setPlayerExperienceText(text: string) {
    this.playerExperienceText = text;
  }

  // Getter pour le texte d'expérience des joueurs
  getPlayerExperienceText(): string {
    return this.playerExperienceText;
  }

  // Setter pour le texte d'expérience des dinosaures
  setDinoExperienceText(text: string) {
    this.dinoExperienceText = text;
  }

  // Getter pour le texte d'expérience des dinosaures
  getDinoExperienceText(): string {
    return this.dinoExperienceText;
  }

  // Setter pour OverrideMaxExperiencePointsPlayer
  setOverrideMaxExperiencePointsPlayer(text: string) {
    this.overrideMaxExperiencePointsPlayer = text;
  }

  // Getter pour OverrideMaxExperiencePointsPlayer
  getOverrideMaxExperiencePointsPlayer(): string {
    return this.overrideMaxExperiencePointsPlayer;
  }

  // Setter pour OverrideMaxExperiencePointsDino
  setOverrideMaxExperiencePointsDino(text: string) {
    this.overrideMaxExperiencePointsDino = text;
  }

  // Getter pour OverrideMaxExperiencePointsDino
  getOverrideMaxExperiencePointsDino(): string {
    return this.overrideMaxExperiencePointsDino;
  }

  // Setter pour les points d'engrammes
  setEngramPointsText(text: string) {
    this.engramPointsText = text;
  }

  // Getter pour les points d'engrammes
  getEngramPointsText(): string {
    return this.engramPointsText;
  }

  // Setters et Getters pour les points d'engrammes (tableau)
  setEngramPointsArray(array: { level: number, points: number }[]) {
    this.engramPointsArray = array;
  }

  getEngramPointsArray(): { level: number, points: number }[] {
    return this.engramPointsArray;
  }
}
