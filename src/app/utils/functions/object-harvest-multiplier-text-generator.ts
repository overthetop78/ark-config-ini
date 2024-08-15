import { Injectable } from "@angular/core";
import { ObjectStorageService } from "src/app/services/object-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ObjectHarvestMultiplierTextGenerator {
  private objectStorageService: ObjectStorageService;

  constructor(objectStorageService: ObjectStorageService) {
    this.objectStorageService = objectStorageService;
  }

  // Méthode pour générer le texte formaté à partir des multiplicateurs de récolte
  generateText(): void {
    // Récupérer les multiplicateurs depuis le service de stockage
    const multipliers = this.objectStorageService.getObjectConfig().filter(multiplier =>
      multiplier.category === 'RESOURCE' ||
      multiplier.category === 'CONSUMABLE' ||
      multiplier.category === 'SEEDS');

    // Créer le texte formaté
    const formattedText = multipliers.map(multiplier => {
      return `HarvestResourceItemAmountClassMultipliers=(ClassName="${multiplier.key}",Multiplier=${multiplier.Multiplier})`;
    }).join('\n');
    // Sauvegarder le texte généré
    this.objectStorageService.setHarvestResourceText(formattedText);
  }
}
