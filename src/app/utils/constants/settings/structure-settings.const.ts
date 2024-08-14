export const STRUCTURE_SETTINGS = [
  {
    key: 'StructureDamageRepairCooldown',
    nameFr: 'Délai de réparation des structures',
    description: 'Contrôle le temps d\'attente avant qu\'une structure puisse être réparée après avoir subi des dégâts.',
    defaultValue: 1.0
  },
  {
    key: 'bPassiveDefensesDamageRiderlessDinos',
    nameFr: 'Dommages des défenses passives aux dinos non montés',
    description: 'Permet aux défenses passives d\'infliger des dégâts aux dinosaures sans cavalier.',
    defaultValue: false
  },
  {
    key: 'TribeSlotReuseCooldown',
    nameFr: 'Délai de réutilisation des emplacements de tribu',
    description: 'Contrôle le temps d\'attente avant qu\'un emplacement de tribu libéré puisse être réutilisé.',
    defaultValue: 1.0
  },
  {
    key: 'DinoTurretDamageMultiplier',
    nameFr: 'Multiplicateur de dégâts des tourelles contre les dinos',
    description: 'Contrôle les dégâts infligés par les tourelles aux dinosaures.',
    defaultValue: 1.0
  },
  {
    key: 'bDisableStructurePlacementCollision',
    nameFr: 'Désactiver la collision pour le placement des structures',
    description: 'Permet de placer des structures sans tenir compte des collisions.',
    defaultValue: false
  },
  {
    key: 'bHardLimitTurretsInRange',
    nameFr: 'Limiter strictement les tourelles dans une portée',
    description: 'Impose une limite stricte sur le nombre de tourelles qui peuvent être placées dans une certaine portée.',
    defaultValue: false
  },
  {
    key: 'FastDecayInterval',
    nameFr: 'Intervalle de décomposition rapide',
    description: 'Ajuste la durée avant que les structures non entretenues ne commencent à se décomposer rapidement.',
    defaultValue: 43200
  },
  {
    key: 'bUseTameLimitForStructuresOnly',
    nameFr: 'Utiliser la limite de domptage uniquement pour les structures',
    description: 'Applique la limite de domptage uniquement aux structures, et non aux créatures.',
    defaultValue: false
  },
  {
    key: 'FuelConsumptionIntervalMultiplier',
    nameFr: 'Multiplicateur de l\'intervalle de consommation de carburant',
    description: 'Ajuste la vitesse à laquelle le carburant est consommé par les structures.',
    defaultValue: 1.0
  },
  {
    key: 'GlobalPoweredBatteryDurabilityDecreasePerSecond',
    nameFr: 'Diminution de la durabilité des batteries par seconde',
    description: 'Contrôle la vitesse à laquelle la durabilité des batteries diminue lorsqu\'elles sont utilisées.',
    defaultValue: 1.0
  },
  {
    key: 'bLimitTurretsInRange',
    nameFr: 'Limiter les tourelles dans la portée',
    description: 'Permet de limiter le nombre de tourelles dans une certaine portée.',
    defaultValue: false
  },
  {
    key: 'LimitTurretsRange',
    nameFr: 'Portée maximale des tourelles',
    description: 'Définit la portée maximale des tourelles.',
    defaultValue: 10000
  },
  {
    key: 'LimitTurretsNum',
    nameFr: 'Nombre maximum de tourelles',
    description: 'Définit le nombre maximum de tourelles dans la portée spécifiée.',
    defaultValue: 100
  },
  {
    key: 'bAllowPlatformSaddleMultiFloors',
    nameFr: 'Autoriser plusieurs étages sur les selles plateformes',
    description: 'Permet aux joueurs de construire plusieurs étages sur les selles plateformes.',
    defaultValue: false
  }
];
