import { Injectable } from '@angular/core';
import { DLCGenesisSettingsStorageService } from 'src/app/services/dlc-genesis-settings-storage.service';


@Injectable({
  providedIn: 'root'
})
export class DlcGenesisSettingsTextGenerator {
  constructor(private dlcGenesisSettingsStorageService: DLCGenesisSettingsStorageService) { }

  // Méthode pour générer le texte formaté à partir des paramètres des engrams
  generateText(): void {
    // Récupérer les paramètres depuis le service de stockage
    const params = this.dlcGenesisSettingsStorageService.getDLCGenesisSettingsData();

    // Créer le texte formaté
    const formattedText = params.map(param => {
      return `${param.key}=${param.value}`;
    }).join('\n');

    // Sauvegarder le texte généré
    this.dlcGenesisSettingsStorageService.setDLCGenesisSettingsText(formattedText);
  }
}
