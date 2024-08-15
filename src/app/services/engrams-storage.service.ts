import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ENGRAMS_DATA } from '../utils/constants/engrams-data.const';
import { EngramInterface } from '../utils/interfaces/engram.interface';

@Injectable({
  providedIn: 'root'
})
export class EngramsStorageService {
  private engramsSubject = new BehaviorSubject<EngramInterface[]>(ENGRAMS_DATA);
  engrams$ = this.engramsSubject.asObservable();

  // Propriété pour notifier les changements
  private engramsChangeSubject = new Subject<void>();
  engramsChange$ = this.engramsChangeSubject.asObservable();

  // Propriété pour stocker et notifier le texte généré
  private engramConfigTextSubject = new BehaviorSubject<string>('');
  engramConfigText$ = this.engramConfigTextSubject.asObservable();

  constructor() { }

  // Getter pour récupérer la liste des engrammes
  getEngrams(): EngramInterface[] {
    return this.engramsSubject.getValue();
  }

  // Setter pour mettre à jour la liste des engrammes
  setEngrams(updatedEngrams: EngramInterface[]): void {
    this.engramsSubject.next(updatedEngrams);
    this.engramsChangeSubject.next(); // Notifier du changement
  }

  // Méthode pour mettre à jour un engramme spécifique
  updateEngram(updatedEngram: EngramInterface): void {
    const currentEngrams = this.getEngrams();
    const index = currentEngrams.findIndex(engram => engram.codeName === updatedEngram.codeName);
    if (index !== -1) {
      currentEngrams[index] = updatedEngram;
      this.setEngrams(currentEngrams);
    }
  }

  // Méthode pour réinitialiser les engrammes à leur état initial
  resetEngrams(): void {
    this.setEngrams([...ENGRAMS_DATA]); // Réinitialiser aux données initiales
  }

  // Getter pour récupérer le texte généré
  getEngramConfigText(): string {
    return this.engramConfigTextSubject.getValue();
  }

  // Setter pour mettre à jour le texte généré
  setEngramConfigText(text: string): void {
    this.engramConfigTextSubject.next(text); // Mettre à jour le texte et notifier les abonnés
  }
}
