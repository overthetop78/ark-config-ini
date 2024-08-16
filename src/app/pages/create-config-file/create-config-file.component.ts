import { Component, OnInit } from '@angular/core';
import { BreedingSettingsStorageService } from 'src/app/services/breeding-settings-storage.service';
import { DinoSettingsStorageService } from 'src/app/services/dino-settings-storage.service';
import { DinoSpawnStorageService } from 'src/app/services/dino-spawn-storage.service';
import { DLCGenesisSettingsStorageService } from 'src/app/services/dlc-genesis-settings-storage.service';
import { EngramSettingsStorageService } from 'src/app/services/engram-settings-storage.service';
import { EngramsStorageService } from 'src/app/services/engrams-storage.service';
import { FarmingSettingsStorageService } from 'src/app/services/farming-settings-storage.service';
import { GameplaySettingsStorageService } from 'src/app/services/gameplay-settings-storage.service';
import { LevelExperienceStorageService } from 'src/app/services/level-experience-storage.service';
import { LevelStorageService } from 'src/app/services/level-storage.service';
import { LootSettingsStorageService } from 'src/app/services/loot-settings-storage.service';
import { ObjectStorageService } from 'src/app/services/object-storage.service';
import { PlayerSettingsStorageService } from 'src/app/services/player-settings-storage.service';
import { PveSettingsStorageService } from 'src/app/services/pve-settings-storage.service';
import { PvpSettingsStorageService } from 'src/app/services/pvp-settings-storage.service';
import { RecipeSettingsStorageService } from 'src/app/services/recipe-settings-storage.service';
import { ResourceSettingsStorageService } from 'src/app/services/resource-settings-storage.service';
import { StructureSettingsStorageService } from 'src/app/services/structure-settings-storage.service';
import { XpSettingsStorageService } from 'src/app/services/xp-settings-storage.service';

@Component({
  selector: 'app-create-config-file',
  templateUrl: './create-config-file.component.html',
  styleUrls: ['./create-config-file.component.scss']
})
export class CreateConfigFileComponent implements OnInit {
  configOptions: { name: string, checked: boolean, icon: string }[] = [];

  constructor(
    private levelStorageService: LevelStorageService,
    private levelExperienceStorageService: LevelExperienceStorageService,
    private engramStorageService: EngramsStorageService,
    private dinoSpawnStorageService: DinoSpawnStorageService,
    private breedingSettingsStorageService: BreedingSettingsStorageService,
    private dinoSettingsStorageService: DinoSettingsStorageService,
    private engramSettingsStorageService: EngramSettingsStorageService,
    private farmingSettingsStorageService: FarmingSettingsStorageService,
    private gameplaySettingsStorageService: GameplaySettingsStorageService,
    private lootSettingsStorageService: LootSettingsStorageService,
    private objectStorageService: ObjectStorageService,
    private playerSettingsStorageService: PlayerSettingsStorageService,
    private pveSettingsStorageService: PveSettingsStorageService,
    private pvpSettingsStorageService: PvpSettingsStorageService,
    private recipeSettingsStorageService: RecipeSettingsStorageService,
    private resourceSettingsStorageService: ResourceSettingsStorageService,
    private structureSettingsStorageService: StructureSettingsStorageService,
    private xpStorageService: XpSettingsStorageService,
    private dlcGenesisStorageService: DLCGenesisSettingsStorageService
  ) { }

  ngOnInit(): void {
    // Chargement initial des options
    this.loadConfigOptions();
    // Abonnement aux BehaviorSubject pour les textes
    this.levelStorageService.playerExperienceText$.subscribe((text) => this.updateConfigOption('LEVEL_PLAYER', !!text));
    this.levelStorageService.dinoExperienceText$.subscribe((text) => this.updateConfigOption('LEVEL_DINO', !!text));
    this.levelStorageService.overrideMaxExperiencePointsPlayer$.subscribe((text) => this.updateConfigOption('EXP_PLAYER', !!text));
    this.levelStorageService.overrideMaxExperiencePointsDino$.subscribe((text) => this.updateConfigOption('EXP_DINO', !!text));
    this.levelStorageService.engramPointsText$.subscribe((text) => this.updateConfigOption('ENGRAM_POINTS', !!text));
    this.levelExperienceStorageService.playerMultiplierText$.subscribe((text) => this.updateConfigOption('MULTIPLIER_PLAYER', !!text));
    this.levelExperienceStorageService.dinoWildMultiplierText$.subscribe((text) => this.updateConfigOption('MULTIPLIER_DINO_WILD', !!text));
    this.levelExperienceStorageService.dinoTamedMultiplierText$.subscribe((text) => this.updateConfigOption('MULTIPLIER_DINO_TAMED', !!text));
    this.levelExperienceStorageService.dinoTamedAffinityMultiplierText$.subscribe((text) => this.updateConfigOption('MULTIPLIER_DINO_TAMED_AFFINITY', !!text));
    this.engramStorageService.engramConfigText$.subscribe((text) => this.updateConfigOption('ENGRAMS', !!text));
    this.farmingSettingsStorageService.farmingSettingsText$.subscribe((text) => this.updateConfigOption('FARMING', !!text));
    this.gameplaySettingsStorageService.gameplaySettingsText$.subscribe((text) => this.updateConfigOption('GAMEPLAY', !!text));
    this.lootSettingsStorageService.lootSettingsText$.subscribe((text) => this.updateConfigOption('LOOT', !!text));
    this.objectStorageService.configOverrideText$.subscribe((text) => this.updateConfigOption('OBJECT', !!text));
    this.playerSettingsStorageService.playerSettingsText$.subscribe((text) => this.updateConfigOption('PLAYER', !!text));
    this.pveSettingsStorageService.pveSettingsText$.subscribe((text) => this.updateConfigOption('PVE', !!text));
    this.pvpSettingsStorageService.pvpSettingsText$.subscribe((text) => this.updateConfigOption('PVP', !!text));
    this.recipeSettingsStorageService.recipeSettingsText$.subscribe((text) => this.updateConfigOption('RECIPE', !!text));
    this.resourceSettingsStorageService.resourceSettingsText$.subscribe((text) => this.updateConfigOption('RESOURCE', !!text));
    this.structureSettingsStorageService.structureSettingsText$.subscribe((text) => this.updateConfigOption('STRUCTURE', !!text));
    this.xpStorageService.xpSettingsText$.subscribe((text) => this.updateConfigOption('XP', !!text));
    this.dinoSettingsStorageService.dinoSettingsText$.subscribe((text) => this.updateConfigOption('DINO', !!text));
    this.breedingSettingsStorageService.breedingSettingsText$.subscribe((text) => this.updateConfigOption('BREEDING', !!text));
    this.dlcGenesisStorageService.dlcGenesisSettingsText$.subscribe((text) => this.updateConfigOption('DLC_GENESIS', !!text));
  }

  loadConfigOptions(): void {
    this.configOptions = [
      { name: 'LEVEL_PLAYER', checked: false, icon: '' },
      { name: 'LEVEL_DINO', checked: false, icon: '' },
      { name: 'EXP_PLAYER', checked: false, icon: '' },
      { name: 'EXP_DINO', checked: false, icon: '' },
      { name: 'ENGRAM_POINTS', checked: false, icon: '' },
      { name: 'ENGRAMS', checked: false, icon: '' },
      { name: 'MULTIPLIER_PLAYER', checked: false, icon: '' },
      { name: 'MULTIPLIER_DINO_WILD', checked: false, icon: '' },
      { name: 'MULTIPLIER_DINO_TAMED', checked: false, icon: '' },
      { name: 'MULTIPLIER_DINO_TAMED_AFFINITY', checked: false, icon: '' },
      { name: 'OBJECT', checked: false, icon: '' },
      { name: 'GAMEPLAY', checked: false, icon: '' },
      { name: 'PLAYER', checked: false, icon: '' },
      { name: 'DINO', checked: false, icon: '' },
      { name: 'RECIPE', checked: false, icon: '' },
      { name: 'RESOURCE', checked: false, icon: '' },
      { name: 'STRUCTURE', checked: false, icon: '' },
      { name: 'FARMING', checked: false, icon: '' },
      { name: 'BREEDING', checked: false, icon: '' },
      { name: 'LOOT', checked: false, icon: '' },
      { name: 'PVE', checked: false, icon: '' },
      { name: 'PVP', checked: false, icon: '' },
      { name: 'XP', checked: false, icon: '' },
      { name: 'DLC_GENESIS', checked: false, icon: '' }

    ];
  }

  updateConfigOption(name: string, isChecked: boolean): void {
    const option = this.configOptions.find(option => option.name === name);
    if (option) {
      option.checked = isChecked;
      option.icon = isChecked ? 'check_circle' : 'cancel';
    }
  }

  generateConfigFile(): string {
    let configFileContent = `[/script/shootergame.shootergamemode]\n`;
    if (this.configOptions.find(option => option.name === 'LEVEL_PLAYER' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Level Player Experience Points \n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.levelStorageService.getPlayerExperienceText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'LEVEL_DINO' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Level Dino Experience Points\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.levelStorageService.getDinoExperienceText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'EXP_PLAYER' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Override Max Experience Points Player\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.levelStorageService.getOverrideMaxExperiencePointsPlayer() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'EXP_DINO' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Override Max Experience Points Dino\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.levelStorageService.getOverrideMaxExperiencePointsDino() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'ENGRAM_POINTS' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Engram Points\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.levelStorageService.getEngramPointsText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'MULTIPLIER_PLAYER' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Multiplier Player\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.levelExperienceStorageService.getPlayerMultiplierText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'MULTIPLIER_DINO_WILD' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Multiplier Dino Wild\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.levelExperienceStorageService.getDinoWildMultiplierText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'MULTIPLIER_DINO_TAMED' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Multiplier Dino Tamed\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.levelExperienceStorageService.getDinoTamedMultiplierText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'MULTIPLIER_DINO_TAMED_AFFINITY' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Multiplier Dino Tamed Affinity\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.levelExperienceStorageService.getDinoTamedAffinityMultiplierText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'ENGRAMS' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Engrams\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.engramStorageService.getEngramConfigText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'OBJECT' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Object\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.objectStorageService.getConfigOverrideText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'GAMEPLAY' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Gameplay Settings\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.gameplaySettingsStorageService.getGameplaySettingsText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'PLAYER' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Player Settings\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.playerSettingsStorageService.getPlayerSettingsText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'DINO' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Dino Settings\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.dinoSettingsStorageService.getDinoSettingsText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'RESOURCE' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Resource Settings\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.resourceSettingsStorageService.getResourceSettingsText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'STRUCTURE' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Structure Settings\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.structureSettingsStorageService.getStructureSettingsText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'FARMING' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Farming Settings\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.farmingSettingsStorageService.getFarmingSettingsText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'BREEDING' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Breeding Settings\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.breedingSettingsStorageService.getBreedingSettingsText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'RECIPE' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Recipe Settings\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.recipeSettingsStorageService.getRecipeSettingsText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'LOOT' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; Loot Settings\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.lootSettingsStorageService.getLootSettingsText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'PVE' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; PVE Settings\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.pveSettingsStorageService.getPveSettingsText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'PVP' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; PVP Settings\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.pvpSettingsStorageService.getPvpSettingsText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'XP' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; XP Settings\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.xpStorageService.getXPSettingsText() + '\n';
    }
    if (this.configOptions.find(option => option.name === 'DLC_GENESIS' && option.checked)) {
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += "; DLC Genesis Settings\n"
      configFileContent += ";------------------------------------------------------\n"
      configFileContent += this.dlcGenesisStorageService.getDLCGenesisSettingsText() + '\n';
    }
    return configFileContent;
  }

  downloadConfigFile(): void {
    const configFileContent = this.generateConfigFile();
    const blob = new Blob([configFileContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'Game.ini';
    link.click();
  }

  getChecked(configOptions: any[]): boolean {
    if (!configOptions) return false;
    return configOptions.filter(option => option.checked).length === 0;
  }
}
