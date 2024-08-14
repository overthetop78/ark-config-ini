import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LevelExperienceStorageService } from 'src/app/services/level-experience-storage.service';

@Component({
  selector: 'app-create-level-multiplier',
  templateUrl: './create-level-multiplier.component.html',
  styleUrls: ['./create-level-multiplier.component.scss']
})
export class CreateLevelMultiplierComponent implements OnInit {

  playerForm: FormGroup;
  dinoWildForm: FormGroup;
  dinoTamedForm: FormGroup;
  dinoTamedAffinityForm: FormGroup;

  basePoints: number = 10; // Base de points par niveau

  playerStats = [
    { id: 0, key: 'health', label: 'Santé', description: 'Augmente la santé/vie du joueur ou dino par niveau', pointsGain: 0 },
    { id: 1, key: 'stamina', label: 'Endurance', description: 'Augmente l\'endurance du joueur ou dino par niveau, utile pour courir ou voler plus longtemps', pointsGain: 0 },
    { id: 2, key: 'torpidity', label: 'Torpeur', description: 'Augmente la résistance à l\'inconscience du joueur ou dino, réduisant le risque d\'état de choc', pointsGain: 0 },
    { id: 3, key: 'oxygen', label: 'Oxygène', description: 'Augmente la capacité d\'oxygène, permettant de rester plus longtemps sous l\'eau', pointsGain: 0 },
    { id: 4, key: 'food', label: 'Nourriture', description: 'Augmente les réserves de nourriture, prolongeant le temps avant d\'avoir très faim', pointsGain: 0 },
    { id: 5, key: 'water', label: 'Eau', description: 'Augmente les réserves d\'eau, prolongeant le temps avant d\'avoir très soif', pointsGain: 0 },
    { id: 6, key: 'temperature', label: 'Température', description: 'Augmente la résistance du joueur ou dino aux extrêmes de température (chaud et froid)', pointsGain: 0 },
    { id: 7, key: 'weight', label: 'Poids', description: 'Augmente la capacité de poids que peut porter le joueur ou dino par niveau', pointsGain: 0 },
    { id: 8, key: 'melee', label: 'Dégâts de mêlée', description: 'Augmente la puissance de frappe en mêlée du joueur ou dino par niveau', pointsGain: 0 },
    { id: 9, key: 'speed', label: 'Vitesse', description: 'Augmente la vitesse de marche et de course, attention à ne pas trop augmenter', pointsGain: 0 },
    { id: 10, key: 'fortitude', label: 'Fortitude', description: 'Augmente la résistance naturelle du joueur ou dino aux combats et aux chocs', pointsGain: 0 },
    { id: 11, key: 'craft', label: 'Vitesse de fabrication', description: 'Augmente la vitesse de fabrication d\'objets et de récolte des dinos par niveau', pointsGain: 0 },
  ];

  dinoWildStats: { id: number, key: string, label: string, description: string, pointsGain: number }[] = JSON.parse(JSON.stringify(this.playerStats)); // Copier les stats des joueurs pour les dinos sauvages
  dinoTamedStats: { id: number, key: string, label: string, description: string, pointsGain: number }[] = JSON.parse(JSON.stringify(this.playerStats)); // Copier les stats pour les dinos apprivoisés
  dinoTamedAffinityStats: { id: number, key: string, label: string, description: string, pointsGain: number }[] = JSON.parse(JSON.stringify(this.playerStats)); // Copier les stats pour les dinos apprivoisés (affinité)

  constructor(
    private fb: FormBuilder,
    private levelExperienceStorageService: LevelExperienceStorageService,
  ) {
    this.playerForm = this.fb.group(this.createFormGroup());
    this.dinoWildForm = this.fb.group(this.createFormGroup());
    this.dinoTamedForm = this.fb.group(this.createFormGroup());
    this.dinoTamedAffinityForm = this.fb.group(this.createFormGroup());
  }

  ngOnInit(): void {
    this.loadInitialData();
  }

  createFormGroup() {
    return this.playerStats.reduce((acc: { [key: string]: any }, stat) => {
      acc[stat.key] = [1, [Validators.required, Validators.min(1)]];
      this.onMultiplierChange('player', stat.key, { target: { value: 1 } });
      return acc;
    }, {});
  }

  loadInitialData() {
    const playerData = this.levelExperienceStorageService.getPlayerLevelExperience();
    if (playerData) {
      this.playerForm.patchValue(playerData);
    }

    const dinoWildData = this.levelExperienceStorageService.getDinoWildLevelExperience();
    if (dinoWildData) {
      this.dinoWildForm.patchValue(dinoWildData);
    }

    const dinoTamedData = this.levelExperienceStorageService.getDinoTamedLevelExperience();
    if (dinoTamedData) {
      this.dinoTamedForm.patchValue(dinoTamedData);
    }

    const dinoTamedAffinityData = this.levelExperienceStorageService.getDinoTamedAffinityLevelExperience();
    if (dinoTamedAffinityData) {
      this.dinoTamedAffinityForm.patchValue(dinoTamedAffinityData);
    }
  }

  onMultiplierChange(type: string, key: string, event: any) {
    const value = event.target.value;
    const multiplier = parseFloat(value) || 1;
    const pointsGain = multiplier * this.basePoints;

    switch (type) {
      case 'player':
        this.updateStatPointsGain(this.playerStats, key, pointsGain);
        break;
      case 'dinoWild':
        this.updateStatPointsGain(this.dinoWildStats, key, pointsGain);
        break;
      case 'dinoTamed':
        this.updateStatPointsGain(this.dinoTamedStats, key, pointsGain);
        break;
      case 'dinoTamedAffinity':
        this.updateStatPointsGain(this.dinoTamedAffinityStats, key, pointsGain);
        break;
    }
  }

  updateStatPointsGain(stats: any[], key: string, pointsGain: number) {
    const stat = stats.find(stat => stat.key === key);
    if (stat) {
      stat.pointsGain = pointsGain;
    }
  }

  onSubmitPlayer() {
    if (this.playerForm.valid) {
      const playerData = this.playerForm.value;

      // Ajouter les IDs aux données sauvegardées
      const playerDataWithId = this.playerStats.map(stat => ({
        id: stat.id,
        key: stat.key,
        value: playerData[stat.key]
      }));

      this.levelExperienceStorageService.setPlayerLevelExperience(playerDataWithId);
      console.log('Multiplicateurs pour joueurs sauvegardés:', playerDataWithId);
    }
  }

  onSubmitDinoWild() {
    if (this.dinoWildForm.valid) {
      const dinoWildData = this.dinoWildForm.value;

      // Ajouter les IDs aux données sauvegardées
      const dinoWildDataWithId = this.dinoWildStats.map(stat => ({
        id: stat.id,
        key: stat.key,
        value: dinoWildData[stat.key]
      }));

      this.levelExperienceStorageService.setDinoWildLevelExperience(dinoWildDataWithId);
      console.log('Multiplicateurs pour dinos sauvages sauvegardés:', dinoWildDataWithId);
    }
  }

  onSubmitDinoTamed() {
    if (this.dinoTamedForm.valid) {
      const dinoTamedData = this.dinoTamedForm.value;

      // Ajouter les IDs aux données sauvegardées
      const dinoTamedDataWithId = this.dinoTamedStats.map(stat => ({
        id: stat.id,
        key: stat.key,
        value: dinoTamedData[stat.key]
      }));

      this.levelExperienceStorageService.setDinoTamedLevelExperience(dinoTamedDataWithId);
      console.log('Multiplicateurs pour dinos apprivoisés sauvegardés:', dinoTamedDataWithId);
    }
  }

  onSubmitDinoTamedAffinity() {
    if (this.dinoTamedAffinityForm.valid) {
      const dinoTamedAffinityData = this.dinoTamedAffinityForm.value;

      // Ajouter les IDs aux données sauvegardées
      const dinoTamedAffinityDataWithId = this.dinoTamedAffinityStats.map(stat => ({
        id: stat.id,
        key: stat.key,
        value: dinoTamedAffinityData[stat.key]
      }));

      this.levelExperienceStorageService.setDinoTamedAffinityLevelExperience(dinoTamedAffinityDataWithId);
      console.log('Multiplicateurs pour dinos apprivoisés (affinité) sauvegardés:', dinoTamedAffinityDataWithId);
    }
  }
}
