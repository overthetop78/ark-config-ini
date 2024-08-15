import { Injectable } from '@angular/core';
import { XpSettingsStorageService } from 'src/app/services/xp-settings-storage.service';

@Injectable({
  providedIn: 'root'
})
export class XpSettingsTextGenerator {
  constructor(private xpSettingsStorageService: XpSettingsStorageService) { }

  // Méthode pour générer le texte formaté à partir des paramètres des engrams
  generateText(): void {
    // Récupérer les paramètres depuis le service de stockage
    const params = this.xpSettingsStorageService.getXPSettingsData();

    // Créer le texte formaté
    const formattedText = params.map(param => {
      return `${param.key}=${param.value}`;
    }).join('\n');

    // Sauvegarder le texte généré
    this.xpSettingsStorageService.setXPSettingsText(formattedText);
  }
}
