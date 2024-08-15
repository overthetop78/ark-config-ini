import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelStorageService {
  // Utilisation de BehaviorSubject pour les données et textes
  private playerLevelDataSubject = new BehaviorSubject<any>(null);
  playerLevelData$ = this.playerLevelDataSubject.asObservable();

  private dinoLevelDataSubject = new BehaviorSubject<any>(null);
  dinoLevelData$ = this.dinoLevelDataSubject.asObservable();

  private playerExperienceTextSubject = new BehaviorSubject<string>('');
  playerExperienceText$ = this.playerExperienceTextSubject.asObservable();

  private dinoExperienceTextSubject = new BehaviorSubject<string>('');
  dinoExperienceText$ = this.dinoExperienceTextSubject.asObservable();

  private overrideMaxExperiencePointsPlayerSubject = new BehaviorSubject<string>('');
  overrideMaxExperiencePointsPlayer$ = this.overrideMaxExperiencePointsPlayerSubject.asObservable();

  private overrideMaxExperiencePointsDinoSubject = new BehaviorSubject<string>('');
  overrideMaxExperiencePointsDino$ = this.overrideMaxExperiencePointsDinoSubject.asObservable();

  private engramPointsTextSubject = new BehaviorSubject<string>('');
  engramPointsText$ = this.engramPointsTextSubject.asObservable();

  private engramPointsArraySubject = new BehaviorSubject<{ level: number, points: number }[]>([]);
  engramPointsArray$ = this.engramPointsArraySubject.asObservable();

  constructor() { }

  // Setter pour les données du joueur
  setPlayerLevelData(data: any) {
    this.playerLevelDataSubject.next(data);
  }

  // Getter pour les données du joueur
  getPlayerLevelData() {
    return this.playerLevelDataSubject.getValue();
  }

  // Setter pour les données du dino
  setDinoLevelData(data: any) {
    this.dinoLevelDataSubject.next(data);
  }

  // Getter pour les données du dino
  getDinoLevelData() {
    return this.dinoLevelDataSubject.getValue();
  }

  // Setter pour le texte d'expérience des joueurs
  setPlayerExperienceText(text: string) {
    this.playerExperienceTextSubject.next(text);
  }

  // Getter pour le texte d'expérience des joueurs
  getPlayerExperienceText(): string {
    return this.playerExperienceTextSubject.getValue();
  }

  // Setter pour le texte d'expérience des dinosaures
  setDinoExperienceText(text: string) {
    this.dinoExperienceTextSubject.next(text);
  }

  // Getter pour le texte d'expérience des dinosaures
  getDinoExperienceText(): string {
    return this.dinoExperienceTextSubject.getValue();
  }

  // Setter pour OverrideMaxExperiencePointsPlayer
  setOverrideMaxExperiencePointsPlayer(text: string) {
    this.overrideMaxExperiencePointsPlayerSubject.next(text);
  }

  // Getter pour OverrideMaxExperiencePointsPlayer
  getOverrideMaxExperiencePointsPlayer(): string {
    return this.overrideMaxExperiencePointsPlayerSubject.getValue();
  }

  // Setter pour OverrideMaxExperiencePointsDino
  setOverrideMaxExperiencePointsDino(text: string) {
    this.overrideMaxExperiencePointsDinoSubject.next(text);
  }

  // Getter pour OverrideMaxExperiencePointsDino
  getOverrideMaxExperiencePointsDino(): string {
    return this.overrideMaxExperiencePointsDinoSubject.getValue();
  }

  // Setter pour les points d'engrammes
  setEngramPointsText(text: string) {
    this.engramPointsTextSubject.next(text);
  }

  // Getter pour les points d'engrammes
  getEngramPointsText(): string {
    return this.engramPointsTextSubject.getValue();
  }

  // Setters et Getters pour les points d'engrammes (tableau)
  setEngramPointsArray(array: { level: number, points: number }[]) {
    this.engramPointsArraySubject.next(array);
  }

  getEngramPointsArray(): { level: number, points: number }[] {
    return this.engramPointsArraySubject.getValue();
  }
}
