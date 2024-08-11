import { Injectable } from '@angular/core';
import { EngramsStorageService } from "src/app/services/engrams-storage.service";
import { EngramInterface } from "../interfaces/engram.interface";

@Injectable({
  providedIn: 'root',
})
export class EngramTextGenerator {

  constructor(private engramStorageService: EngramsStorageService) { }

  generateEngramConfigText(): void {
    const engrams: EngramInterface[] = this.engramStorageService.getEngrams();

    let configText = '';

    engrams.forEach(engram => {
      const engramHidden = engram.hidden ? 'True' : 'False';
      const engramPreReq = engram.preReq ? 'True' : 'False';

      configText += `OverrideNamedEngramEntries=(EngramClassName="${engram.codeName}",EngramHidden=${engramHidden},EngramPointsCost=${engram.points},EngramLevelRequirement=${engram.level},RemoveEngramPreReq=${engramPreReq})\n`;
    });

    // Appeler le setter du service pour stocker le texte généré
    this.engramStorageService.setEngramConfigText(configText.trim());
  }
}
