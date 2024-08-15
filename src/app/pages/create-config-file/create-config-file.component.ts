import { Component, OnInit } from '@angular/core';
import { LevelExperienceStorageService } from 'src/app/services/level-experience-storage.service';
import { ObjectStorageService } from 'src/app/services/object-storage.service';
import { StructureSettingsStorageService } from 'src/app/services/structure-settings-storage.service';

@Component({
  selector: 'app-create-config-file',
  templateUrl: './create-config-file.component.html',
  styleUrls: ['./create-config-file.component.scss']
})
export class CreateConfigFileComponent implements OnInit {
  configOptions: { name: string, checked: boolean, icon: string }[] = [];

  constructor(
    private levelStorageService: LevelExperienceStorageService,
    private levelExperienceService: LevelExperienceStorageService,
    private objectStorageService: ObjectStorageService,
    private structureSettingsStorageService: StructureSettingsStorageService,
    // Ajouter d'autres services si nécessaire
  ) { }

  ngOnInit(): void {
    this.loadConfigOptions();
  }

  ngOnChanges(): void {
    this.loadConfigOptions();
  }

  loadConfigOptions(): void {
    const levelPlayer = this.levelStorageService.getPlayerMultiplierText() || '';
    const levelDinoWild = this.levelStorageService.getDinoWildMultiplierText() || '';
    const levelDinoTamed = this.levelStorageService.getDinoTamedMultiplierText() || '';
    const levelDinoTamedAffinity = this.levelStorageService.getDinoTamedAffinityMultiplierText() || '';
    const levelExperiencePlayer = this.levelExperienceService.getPlayerLevelExperience() || '';
    const levelExperienceDinoWild = this.levelExperienceService.getDinoWildLevelExperience() || '';
    const levelExperienceDinoTamed = this.levelExperienceService.getDinoTamedLevelExperience() || '';
    const levelExperienceDinoTamedAffinity = this.levelExperienceService.getDinoTamedAffinityLevelExperience() || '';

    this.configOptions = [
      { name: 'LEVEL_PLAYER', checked: levelPlayer.length > 0, icon: '' },
      { name: 'LEVEL_DINO_WILD', checked: levelDinoWild.length > 0, icon: '' },
      { name: 'LEVEL_DINO_TAMED', checked: levelDinoTamed.length > 0, icon: '' },
      { name: 'LEVEL_DINO_TAMED_AFFINITY', checked: levelDinoTamedAffinity.length > 0, icon: '' },
      { name: 'LEVEL_EXPERIENCE_PLAYER', checked: levelExperiencePlayer.length > 0, icon: '' },
      { name: 'LEVEL_EXPERIENCE_DINO_WILD', checked: levelExperienceDinoWild.length > 0, icon: '' },
      { name: 'LEVEL_EXPERIENCE_DINO_TAMED', checked: levelExperienceDinoTamed.length > 0, icon: '' },
      { name: 'LEVEL_EXPERIENCE_DINO_TAMED_AFFINITY', checked: levelExperienceDinoTamedAffinity.length > 0, icon: '' },
      { name: 'Object Config', checked: this.objectStorageService.getObjectConfig().length > 0, icon: '' },
      { name: 'Structure Settings', checked: this.structureSettingsStorageService.getStructureSettingsData().length > 0, icon: '' },
      // Ajouter d'autres options si nécessaire
    ];

    this.configOptions.forEach(option => {
      option.icon = option.checked ? 'check_circle' : 'cancel';
    });
  }

  generateConfigFile(): string {
    let configFileContent = `[/script/shootergame.shootergamemode]\n`;
    if (this.configOptions.find(option => option.name === 'LEVEL_PLAYER' && option.checked)) configFileContent += this.levelStorageService.getPlayerMultiplierText() + '\n';
    if (this.configOptions.find(option => option.name === 'LEVEL_DINO_WILD' && option.checked)) configFileContent += this.levelStorageService.getDinoWildMultiplierText() + '\n';
    if (this.configOptions.find(option => option.name === 'LEVEL_DINO_TAMED' && option.checked)) configFileContent += this.levelStorageService.getDinoTamedMultiplierText() + '\n';
    if (this.configOptions.find(option => option.name === 'LEVEL_DINO_TAMED_AFFINITY' && option.checked)) configFileContent += this.levelStorageService.getDinoTamedAffinityMultiplierText() + '\n';
    if (this.configOptions.find(option => option.name === 'LEVEL_EXPERIENCE_PLAYER' && option.checked)) configFileContent += this.levelExperienceService.getPlayerLevelExperience() + '\n';
    if (this.configOptions.find(option => option.name === 'LEVEL_EXPERIENCE_DINO_WILD' && option.checked)) configFileContent += this.levelExperienceService.getDinoWildLevelExperience() + '\n';
    if (this.configOptions.find(option => option.name === 'LEVEL_EXPERIENCE_DINO_TAMED' && option.checked)) configFileContent += this.levelExperienceService.getDinoTamedLevelExperience() + '\n';
    if (this.configOptions.find(option => option.name === 'LEVEL_EXPERIENCE_DINO_TAMED_AFFINITY' && option.checked)) configFileContent += this.levelExperienceService.getDinoTamedAffinityLevelExperience() + '\n';
    // Ajouter d'autres configurations si nécessaire

    return configFileContent;
  }

  downloadConfigFile(): void {
    const configFileContent = this.generateConfigFile();
    const blob = new Blob([configFileContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'Config.ini';
    link.click();
  }

  getChecked(configOptions: any[]): boolean {
    if (!configOptions) return false;
    return configOptions.filter(option => option.checked).length > 0;
  }
}
