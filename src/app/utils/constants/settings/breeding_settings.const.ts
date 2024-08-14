export const BREEDING_SETTINGS = [
  {
    key: 'MatingIntervalMultiplier',
    nameFr: 'Multiplicateur de l\'intervalle de reproduction',
    description: 'Ajuste le temps d\'attente entre deux accouplements possibles pour les créatures. Une valeur plus élevée allonge cet intervalle, tandis qu\'une valeur plus basse le réduit.',
    defaultValue: 1.0
  },
  {
    key: 'MatingSpeedMultiplier',
    nameFr: 'Multiplicateur de la vitesse de reproduction',
    description: 'Ajuste la rapidité avec laquelle les créatures s\'accouplent. Une valeur plus élevée réduit le temps nécessaire pour l\'accouplement, tandis qu\'une valeur plus basse l\'allonge.',
    defaultValue: 1.0
  },
  {
    key: 'EggHatchSpeedMultiplier',
    nameFr: 'Multiplicateur de la vitesse d\'éclosion des œufs',
    description: 'Réduit ou augmente le temps requis pour l\'éclosion des œufs. Une valeur plus élevée accélère l\'éclosion.',
    defaultValue: 1.0
  },
  {
    key: 'BabyMatureSpeedMultiplier',
    nameFr: 'Multiplicateur de la vitesse de maturation des bébés',
    description: 'Réduit ou augmente le temps nécessaire pour qu\'un bébé dino atteigne l\'âge adulte. Une valeur plus élevée accélère la maturation.',
    defaultValue: 1.0
  },
  {
    key: 'BabyFoodConsumptionSpeedMultiplier',
    nameFr: 'Multiplicateur de la vitesse de consommation de nourriture des bébés',
    description: 'Ajuste la vitesse à laquelle les bébés dinosaures consomment de la nourriture. Une valeur plus basse ralentit la consommation, tandis qu\'une valeur plus élevée l\'accélère.',
    defaultValue: 1.0
  },
  {
    key: 'LayEggIntervalMultiplier',
    nameFr: 'Multiplicateur de l\'intervalle de ponte',
    description: 'Ajuste l\'intervalle de temps entre les pontes d\'œufs par les créatures. Une valeur plus élevée allonge cet intervalle, tandis qu\'une valeur plus basse le réduit.',
    defaultValue: 1.0
  },
  {
    key: 'BabyImprintingStatScaleMultiplier',
    nameFr: 'Multiplicateur de l\'échelle des statistiques d\'imprégnation des bébés',
    description: 'Ajuste l\'impact de l\'imprégnation sur les statistiques des bébés dinosaures. Une valeur plus élevée augmente les effets de l\'imprégnation, tandis qu\'une valeur de 0 désactive complètement l\'imprégnation.',
    defaultValue: 1.0
  },
  {
    key: 'BabyImprintAmountMultiplier',
    nameFr: 'Multiplicateur de la quantité d\'imprégnation',
    description: 'Ajuste la quantité d\'imprégnation gagnée à chaque interaction. Une valeur plus basse réduit le pourcentage d\'imprégnation, tandis qu\'une valeur plus élevée l\'augmente. Ce multiplicateur s\'applique à toutes les espèces.',
    defaultValue: 1.0
  },
  {
    key: 'BabyCuddleIntervalMultiplier',
    nameFr: 'Multiplicateur de l\'intervalle de câlins des bébés',
    description: 'Ajuste la fréquence à laquelle les bébés dinosaures demandent des câlins pour l\'imprégnation. Une valeur plus élevée augmente l\'intervalle entre les câlins, tandis qu\'une valeur plus basse le réduit, nécessitant ainsi plus de câlins pour atteindre la même imprégnation.',
    defaultValue: 1.0
  },
  {
    key: 'BabyCuddleGracePeriodMultiplier',
    nameFr: 'Multiplicateur de la période de grâce des câlins',
    description: 'Ajuste la durée pendant laquelle un câlin peut être donné sans entraîner de diminution de la qualité d\'imprégnation. Une valeur plus élevée allonge cette période de grâce.',
    defaultValue: 1.0
  },
  {
    key: 'BabyCuddleLoseImprintQualitySpeedMultiplier',
    nameFr: 'Multiplicateur de la vitesse de perte de qualité d\'imprégnation des câlins',
    description: 'Ajuste la vitesse à laquelle la qualité de l\'imprégnation diminue après le moment où un câlin aurait dû être donné. Une valeur plus élevée accélère cette perte de qualité.',
    defaultValue: 1.0
  }
];
