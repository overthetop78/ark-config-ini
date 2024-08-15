import { Injectable } from "@angular/core";
import { ObjectStorageService } from "src/app/services/object-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ObjectQuantityTextGenerator {
  private objectStorageService: ObjectStorageService;

  constructor(objectStorageService: ObjectStorageService) {
    this.objectStorageService = objectStorageService;
  }

  // Méthode pour générer le texte formaté à partir des multiplicateurs de récolte
  generateText(): void {
    // Récupérer les multiplicateurs depuis le service de stockage
    const multipliers = this.objectStorageService.getObjectConfig();
    console.log(multipliers);

    // Créer le texte formaté
    const formattedText = multipliers.map(multiplier => {
      return `ConfigOverrideItemMaxQuantity=(ItemClassString="${multiplier.key}",Quantity=(MaxItemQuantity=${multiplier.MaxItemQuantity}, bIgnoreMultiplier=${multiplier.bIgnoreMultiplier}))`;
    }).join('\n');
    // Sauvegarder le texte généré
    this.objectStorageService.setConfigOverrideText(formattedText);
  }

}




