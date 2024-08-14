import { Injectable } from "@angular/core";
import { LootSettingsStorageService } from "src/app/services/loot-settings-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LootSettingsTextGenerator {
  private lootSettingsStorageService: LootSettingsStorageService;

  constructor(lootSettingsStorageService: LootSettingsStorageService) {
    this.lootSettingsStorageService = lootSettingsStorageService;
  }

  // Méthode pour générer le texte formaté à partir des paramètres de loot
  generateText(): void {
    // Récupérer les paramètres depuis le service de stockage
    const params = this.lootSettingsStorageService.getLootSettingsData();
    console.log(params);

    // Créer le texte formaté
    const formattedText = params.map(param => {
      return `${param.key}=${param.value}`;
    }).join('\n');
    console.log(formattedText);

    // Sauvegarder le texte généré
    this.lootSettingsStorageService.setLootSettingsText(formattedText);
  }
}
