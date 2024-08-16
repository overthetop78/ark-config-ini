import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { EngramsStorageService } from 'src/app/services/engrams-storage.service';
import { LevelStorageService } from 'src/app/services/level-storage.service';
import { ENGRAMS_DATA } from 'src/app/utils/constants/engrams-data.const';
import { EngramTextGenerator } from 'src/app/utils/functions/engram-text-generator';
import { EngramInterface } from 'src/app/utils/interfaces/engram.interface';
import { LevelEngramPointsInterface } from 'src/app/utils/interfaces/level-engram-points.interface';

@Component({
  selector: 'app-create-engrams',
  templateUrl: './create-engrams.component.html',
  styleUrls: ['./create-engrams.component.scss']
})
export class CreateEngramsComponent implements OnInit {
  engramsForm!: FormGroup; // Formulaire pour les engrammes
  engramDataSource: EngramInterface[] = []; // Données des engrammes
  playerData: any; // Données du joueur (niveau max, points max, etc.)
  displayedColumns: string[] = ['nameFr', 'level', 'points', 'removePrereq', 'hidden'];
  totalPoints = 3444; // Points totaux pour tous les engrammes de base sur The Island (sans les mods)
  remainingPoints = 3444; // Points restants pour les engrammes
  remainingPointsForLevel = 0; // Points restants pour le niveau actuel
  totalPointsForLevel = 0; // Points totaux pour le niveau actuel
  levelPointsTable: LevelEngramPointsInterface[] = []; // Tableau des points par niveau

  constructor(
    private fb: FormBuilder,
    private engramsStorageService: EngramsStorageService,
    private levelStorageService: LevelStorageService,
    private engramtextGenerator: EngramTextGenerator,
  ) { }

  async ngOnInit(): Promise<void> {
    this.engramsForm = this.fb.group({});
    this.engramDataSource = ENGRAMS_DATA;
    this.initializeFormControls(this.engramDataSource);

    try {
      const savedEngrams = await firstValueFrom(this.engramsStorageService.engrams$);

      // Créer une map pour indexer les engrammes sauvegardés par position
      const savedEngramMap = new Map(savedEngrams.map(engram => [engram.position, engram]));

      this.engramDataSource.forEach(engram => {
        const savedEngram = savedEngramMap.get(engram.position);
        if (savedEngram) {
          this.engramsForm.get(`level_${engram.position}`)?.setValue(savedEngram.level);
          this.engramsForm.get(`points_${engram.position}`)?.setValue(savedEngram.points);
          this.engramsForm.get(`removePrereq_${engram.position}`)?.setValue(savedEngram.preReq);
          this.engramsForm.get(`hidden_${engram.position}`)?.setValue(savedEngram.hidden);
        }
      });
      // Désactiver à nouveau les champs niveau si nécessaire
      this.engramDataSource.forEach((engram) => {
        const levelControl = this.engramsForm.get(`level_${engram.position}`);
        const points = this.engramsForm.get(`points_${engram.position}`)?.value;
        if (points > 0) {
          levelControl?.disable({ emitEvent: false });
        }
      });

      this.playerData = this.levelStorageService.getPlayerLevelData();
      this.totalPoints = this.getTotalMaxPoints();
      this.remainingPoints = this.totalPoints;
      this.initializeLevelPointsTable();

    } catch (error) {
      console.error('Erreur lors du chargement des engrammes sauvegardés :', error);
      // Gérer l'erreur de manière appropriée (par exemple, afficher un message à l'utilisateur)
    }
  }


  initializeFormControls(engrams: any[]) {
    engrams.forEach(engram => {
      this.engramsForm.addControl(`level_${engram.position}`, this.fb.control(engram.level));
      this.engramsForm.addControl(`points_${engram.position}`, this.fb.control(engram.points));
      this.engramsForm.addControl(`removePrereq_${engram.position}`, this.fb.control(engram.preReq));
      this.engramsForm.addControl(`hidden_${engram.position}`, this.fb.control(engram.hidden));
    });
  }

  initializeLevelPointsTable(): void {
    // Récupérer les données du tableau des points d'engrammes depuis le service
    const engramPointsArray = this.levelStorageService.getEngramPointsArray();

    if (!engramPointsArray || engramPointsArray.length === 0) {
      return; // Sortir de la fonction si le tableau est vide ou non défini
    }

    // Initialiser le tableau des points par niveau
    this.levelPointsTable = engramPointsArray.map(pointsForThisLevel => {
      return {
        level: pointsForThisLevel.level,  // Utiliser le niveau directement depuis les données
        points_max: pointsForThisLevel.points,  // Points max calculés pour ce niveau
        points_attribute: 0,  // Points attribués par défaut à 0
        points_engrams: {}  // Initialiser les points des engrammes à un objet vide
      };
    });
  }



  onSubmit() {
    // Réactiver temporairement les champs niveau désactivés
    this.engramDataSource.forEach((engram) => {
      const levelControl = this.engramsForm.get(`level_${engram.position}`);
      if (levelControl?.disabled) {
        levelControl.enable({ emitEvent: false });
      }
    });

    //Copier le tableau des engrammes dans un nouveau tableau pour éviter les modifications
    const engrams: EngramInterface[] = [...this.engramDataSource];

    const formValues = this.engramsForm.value;

    // Mise à jour des engrammes avec les valeurs du formulaire, en ignorant ceux sans niveau et sans points
    const updatedEngrams = engrams.map(engram => {
      const level = formValues[`level_${engram.position}`] || null;
      const points = formValues[`points_${engram.position}`] || null;

      // Ignorer les engrammes sans niveau et sans points
      if (!level && !points) {
        return null;
      }
      return {
        nameFr: engram.nameFr,
        name: engram.name,
        codeName: engram.codeName,
        position: engram.position,
        level: level || undefined,
        points: points || undefined,
        preReq: formValues[`removePrereq_${engram.position}`] || false,
        hidden: formValues[`hidden_${engram.position}`] || false,
      } as EngramInterface;
    })
      .filter((engram): engram is EngramInterface => engram !== null); // Filtrer les engrammes null et indiquer le type
    // Sauvegarder les engrammes mis à jour
    this.engramsStorageService.setEngrams(updatedEngrams);
    // Désactiver à nouveau les champs niveau si nécessaire
    this.engramDataSource.forEach((engram) => {
      const levelControl = this.engramsForm.get(`level_${engram.position}`);
      const points = formValues[`points_${engram.position}`];
      if (points > 0) {
        levelControl?.disable({ emitEvent: false });
      }
    });
    // Générer le texte de configuration des engrammes (qui sera stocké dans le service)
    this.engramtextGenerator.generateEngramConfigText();
  }

  getTotalMaxPoints(): number {
    // Récupérer les données du tableau des niveaux
    const engramPointsArray = this.levelStorageService.getEngramPointsArray();

    // Si le tableau existe et contient des données, on calcule le total
    if (engramPointsArray && engramPointsArray.length > 0) {
      return engramPointsArray.reduce((total, engram) => total + engram.points, 0);
    }
    // Si le tableau est vide ou non défini, on retourne la valeur de playerData comme secours
    const playerData = this.levelStorageService.getPlayerLevelData();
    if (playerData && playerData.maxEngramPoints) {
      return playerData.maxEngramPoints;
    }
    // Si aucune donnée n'est disponible, renvoyer une valeur de base par défaut (exemple : 3444)
    return 3444;
  }

  onLevelInput(event: Event, position: number) {
    const inputElement = event.target as HTMLInputElement;
    const level = parseInt(inputElement.value, 10) || 0;
    if (this.levelPointsTable.length === 0) {
      return; // Sortir de la fonction si le tableau est vide
    }
    // Trouver l'entrée correspondante dans le tableau levelPointsTable
    const levelEntry = this.levelPointsTable.find(entry => entry.level === level);
    if (level < 1 || levelEntry === undefined) {
      inputElement.value = ''; // Réinitialiser la valeur de l'input
      this.remainingPointsForLevel = 0; // Réinitialiser les points restants pour ce niveau
      return; // Sortir de la fonction
    }

    if (levelEntry) {
      this.totalPointsForLevel = levelEntry.points_max;
      this.remainingPointsForLevel = levelEntry.points_max - levelEntry.points_attribute;
    }
  }

  onPointsInput(event: Event, position: number) {
    const inputElement = event.target as HTMLInputElement;
    const levelControl = this.engramsForm.get(`level_${position}`);
    const level = levelControl?.value;

    // Si le niveau n'est pas défini, on ne fait rien
    if (level === null) {
      inputElement.value = ''; // Réinitialiser la valeur de l'input
      return; // Sortir de la fonction
    }

    const enteredPoints = parseInt(inputElement.value, 10) || 0;

    if (this.levelPointsTable.length === 0) {
      return; // Sortir de la fonction si le tableau est vide
    }
    // Trouver l'entrée correspondante dans le tableau levelPointsTable
    const levelEntry = this.levelPointsTable.find(entry => entry.level === level);

    if (levelEntry) {
      const previousPoints = levelEntry.points_engrams[position]?.last_point || 0;

      // Mettre à jour les points attribués pour ce niveau
      levelEntry.points_attribute += enteredPoints - previousPoints;
      this.remainingPointsForLevel = levelEntry.points_max - levelEntry.points_attribute;
      this.remainingPoints = this.totalPoints - this.levelPointsTable.reduce((acc, entry) => acc + entry.points_attribute, 0);

      // S'assurer que la nouvelle valeur est mise à jour dans le tableau
      levelEntry.points_engrams[position] = {
        last_point: enteredPoints,
        before_points: previousPoints
      };

      // Bloquer le niveau s'il y a des points attribués
      if (enteredPoints > 0) {
        levelControl?.disable();
      } else {
        levelControl?.enable();
      }
    }
  }



  // Méthode pour remplir le tableau automatiquement
  fillTable() {
    const playerData = this.levelStorageService.getPlayerLevelData();
    if (!playerData) throw new Error('Les données pour les joueurs ne sont pas disponibles.');

    const maxLevel = playerData.maxEngramLevels;
    const maxEngramPoints = playerData.maxEngramPoints;
    const totalEngrams = this.engramDataSource.length;


    let remainingPoints = playerData.maxEngramPoints;
    let pointsArray = new Array(totalEngrams).fill(0);

    // Calculer les points initiaux par engramme
    const basePoints = Math.floor(remainingPoints / totalEngrams);
    for (let i = 0; i < totalEngrams; i++) {
      pointsArray[i] = basePoints;
      remainingPoints -= basePoints;
    }

    // Ajuster les points pour éviter que des engrammes aient zéro point
    for (let i = totalEngrams - 1; i >= 0 && remainingPoints > 0; i--) {
      pointsArray[i]++;
      remainingPoints--;
    }

    // Affichage du niveau, des points et des points restants par niveau
    let levelPointsMap = new Map<number, number>();

    this.engramDataSource.forEach((engram, index) => {
      const levelFraction = (index / totalEngrams) * maxLevel;
      const level = Math.floor(Math.max(1, levelFraction));

      if (!levelPointsMap.has(level)) {
        levelPointsMap.set(level, 0);
      }
      levelPointsMap.set(level, (levelPointsMap.get(level) || 0) + pointsArray[index]);

      // Remplir les champs du formulaire avec les valeurs calculées
      this.engramsForm.get(`level_${index}`)?.setValue(level);
      this.engramsForm.get(`points_${index}`)?.setValue(pointsArray[index]);
      if (index > 0) {
        this.engramsForm.get(`hidden_${index}`)?.setValue(true);
      }
    });

  }
  resetTable() {
    this.engramDataSource.forEach((engram, index) => {
      this.engramsForm.get(`level_${index}`)?.setValue('');
      this.engramsForm.get(`level_${index}`)?.enable();
      this.engramsForm.get(`points_${index}`)?.setValue('');
      this.engramsForm.get(`hidden_${index}`)?.setValue(true);
    });
  }

}
