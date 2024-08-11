import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LevelStorageService } from 'src/app/services/level-storage.service';

@Component({
  selector: 'app-create-level-multiplier',
  templateUrl: './create-level-multiplier.component.html',
  styleUrls: ['./create-level-multiplier.component.scss']
})
export class CreateLevelMultiplierComponent implements OnInit {

  playerForm: FormGroup;
  dinoForm: FormGroup;

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


  dinoStats = JSON.parse(JSON.stringify(this.playerStats)); // Dupliquer les stats des joueurs pour les dinos

  constructor(
    private fb: FormBuilder,
    private levelStorageService: LevelStorageService,
  ) {
    this.playerForm = this.fb.group(this.createFormGroup());
    this.dinoForm = this.fb.group(this.createFormGroup());
  }

  ngOnInit(): void {
    this.loadInitialData();
  }

  createFormGroup() {
    return this.playerStats.reduce((acc: { [key: string]: any }, stat) => {
      acc[stat.key] = [1, [Validators.required, Validators.min(1)]];
      this.onMultiplierChange('player', stat.key, { target: { value: 1 } });
      this.onMultiplierChange('dino', stat.key, { target: { value: 1 } });
      return acc;
    }, {});
  }

  loadInitialData() {
    const playerData = this.levelStorageService.getPlayerLevelData();
    if (playerData) {
      this.playerForm.patchValue(playerData);
    }

    const dinoData = this.levelStorageService.getDinoLevelData();
    if (dinoData) {
      this.dinoForm.patchValue(dinoData);
    }
  }

  onMultiplierChange(type: 'player' | 'dino', key: string, event: any) {
    const value = event.target.value;
    if (event.target.value < 1) event.target.value = 1;
    else if (event.target.value > 100) event.target.value = 100;

    const multiplier = parseFloat(value) || 1;
    const pointsGain = multiplier * this.basePoints;

    if (type === 'player') {
      const stat = this.playerStats.find(stat => stat.key === key);
      if (stat) {
        stat.pointsGain = pointsGain;
      }
    } else if (type === 'dino') {
      const stat = this.dinoStats.find((stat: { key: string; }) => stat.key === key);
      if (stat) {
        stat.pointsGain = pointsGain;
      }
    }
  }

  onSubmitPlayer() {
    if (this.playerForm.valid) {
      const playerData = this.playerForm.value;
      this.levelStorageService.setPlayerLevelData(playerData);
      console.log('Multiplicateurs pour joueurs sauvegardés:', playerData);
    }
  }

  onSubmitDino() {
    if (this.dinoForm.valid) {
      const dinoData = this.dinoForm.value;
      this.levelStorageService.setDinoLevelData(dinoData);
      console.log('Multiplicateurs pour dinos sauvegardés:', dinoData);
    }
  }
}
