export const GAMEPLAY_SETTINGS = [
  {
    key: 'bFlyerPlatformAllowUnalignedDinoBasing',
    nameFr: 'Autoriser le placement non aligné de dinosaures sur les plateformes volantes',
    description: 'Détermine si les dinosaures peuvent se poser sur les plateformes volantes même s\'ils ne sont pas parfaitement alignés avec la plateforme. Une valeur `true` permet le placement non aligné, tandis qu\'une valeur `false` exige un alignement précis pour le placement.',
    defaultValue: false
  },
  {
    key: 'MaxNumberOfPlayersInTribe',
    nameFr: 'Nombre maximum de joueurs par tribu',
    description: 'Spécifie le nombre maximal de joueurs autorisés dans une tribu. Une valeur plus élevée permet à plus de joueurs de rejoindre la même tribu.',
    defaultValue: 10
  },
  {
    key: 'MaxTribeLogs',
    nameFr: 'Nombre maximum de journaux de tribu',
    description: 'Détermine le nombre maximal d\'entrées conservées dans le journal de la tribu. Les entrées plus anciennes seront supprimées lorsque ce nombre est dépassé.',
    defaultValue: 100
  },
  {
    key: 'bDisableDinoRiding',
    nameFr: 'Désactiver la monte des dinosaures',
    description: 'Interdit aux joueurs de monter sur les dinosaures. Lorsque cette option est activée, les dinosaures ne peuvent pas être utilisés comme montures.',
    defaultValue: false
  },
  {
    key: 'bDisableDinoTaming',
    nameFr: 'Désactiver le dressage des dinosaures',
    description: 'Empêche les joueurs de dresser ou apprivoiser les dinosaures. Lorsque cette option est activée, il est impossible d’interagir avec les dinosaures pour les dresser.',
    defaultValue: false
  },
  {
    key: 'bShowCreativeMode',
    nameFr: 'Afficher le mode créatif',
    description: 'Active le mode créatif, permettant aux joueurs de bénéficier de fonctionnalités spécifiques comme l’accès illimité aux ressources et la possibilité de construire sans restrictions.',
    defaultValue: false
  },
  {
    key: 'MaxAlliancesPerTribe',
    nameFr: 'Nombre maximum d\'alliances par tribu',
    description: 'Limite le nombre d\'alliances que chaque tribu peut former avec d\'autres tribus.',
    defaultValue: 3
  },
  {
    key: 'MaxTribesPerAlliance',
    nameFr: 'Nombre maximum de tribus par alliance',
    description: 'Définit le nombre maximum de tribus autorisées à rejoindre une seule alliance.',
    defaultValue: 5
  },
  {
    key: 'UseCorpseLifeSpanMultiplier',
    nameFr: 'Multiplicateur de la durée de vie des corps',
    description: 'Détermine combien de temps les corps restent dans le jeu avant de se désintégrer. Une valeur de 1.0 signifie la durée de vie par défaut, tandis qu’une valeur supérieure augmente le temps pendant lequel les corps restent visibles.',
    defaultValue: 1.0
  },
  {
    key: 'DestroyTamesOverLevelClamp',
    nameFr: 'Détruire les créatures apprivoisées au-dessus d\'un certain niveau',
    description: 'Active la destruction automatique des créatures apprivoisées dont le niveau dépasse une valeur spécifique. Cette option aide à gérer les créatures trop puissantes ou non désirées dans le jeu.',
    defaultValue: false
  },
  {
    key: 'LimitNonPlayerDroppedItemsRange',
    nameFr: 'Limiter la portée des objets lâchés par des non-joueurs',
    description: 'Définit la distance maximale à laquelle les objets lâchés par des créatures non-joueurs restent visibles avant de disparaître.',
    defaultValue: 1.0
  },
  {
    key: 'LimitNonPlayerDroppedItemsCount',
    nameFr: 'Limiter le nombre d\'objets lâchés par des non-joueurs',
    description: 'Définit le nombre maximum d\'objets lâchés par des créatures non-joueurs qui peuvent être présents dans le monde simultanément.',
    defaultValue: 100
  },
  {
    key: 'MaxFallSpeedMultiplier',
    nameFr: 'Multiplicateur de la vitesse de chute maximale',
    description: 'Définit la vitesse maximale à laquelle les joueurs peuvent tomber. Une valeur plus élevée augmente cette vitesse.',
    defaultValue: 1.0
  },
  {
    key: 'bUseSingleplayerSettings',
    nameFr: 'Utiliser les paramètres solo',
    description: 'Applique les paramètres configurés pour le mode solo aux serveurs multijoueurs.',
    defaultValue: false
  },
  {
    key: 'BaseTemperatureMultiplier',
    nameFr: 'Multiplicateur de température de base',
    description: 'Définit le facteur de multiplication de la température de base de la carte. Une valeur inférieure rendra l\'environnement plus froid, tandis qu\'une valeur supérieure le rendra plus chaud.',
    defaultValue: 1.0
  },
];
