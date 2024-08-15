import { Injectable } from '@angular/core';
import { EngramSettingsStorageService } from 'src/app/services/engram-settings-storage.service';


@Injectable({
  providedIn: 'root'
})
export class EngramSettingsTextGenerator {
  constructor(private engramSettingsStorageService: EngramSettingsStorageService) { }

  // Méthode pour générer le texte formaté à partir des paramètres des engrams
  generateText(): void {
    // Récupérer les paramètres depuis le service de stockage
    const params = this.engramSettingsStorageService.getEngramSettingsData();

    // Créer le texte formaté
    const formattedText = params.map(param => {
      return `${param.key}=${param.value}`;
    }).join('\n');

    // Sauvegarder le texte généré
    this.engramSettingsStorageService.setEngramSettingsText(formattedText);
  }
}
