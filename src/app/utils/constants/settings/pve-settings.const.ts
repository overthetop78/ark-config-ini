export const PVE_SETTINGS = [
  {
    key: 'bAutoPvETimer',
    nameFr: 'Activer le minuteur automatique PvE',
    description: 'Active le basculement automatique entre les modes PvP et PvE selon un horaire prédéfini.',
    defaultValue: false
  },
  {
    key: 'bAutoPvEUseSystemTime',
    nameFr: 'Utiliser l\'heure système pour le basculement PvE',
    description: 'Utilise l\'heure du système pour déterminer les périodes de basculement automatique en mode PvE.',
    defaultValue: false
  },
  {
    key: 'AutoPvEStartTimeSeconds',
    nameFr: 'Heure de début automatique du mode PvE (en secondes)',
    description: 'Définit l\'heure en secondes depuis minuit où le mode PvE doit commencer automatiquement.',
    defaultValue: 0 // Exemple: 0 secondes correspond à minuit
  },
  {
    key: 'AutoPvEStopTimeSeconds',
    nameFr: 'Heure de fin automatique du mode PvE (en secondes)',
    description: 'Définit l\'heure en secondes depuis minuit où le mode PvE doit s\'arrêter automatiquement.',
    defaultValue: 86400 // Exemple: 86400 secondes correspond à 24 heures (minuit)
  },
  {
    key: 'bPvEAllowTribeWar',
    nameFr: 'Autoriser les guerres de tribus en PvE',
    description: 'Permet aux tribus de déclarer la guerre à d\'autres tribus en mode PvE.',
    defaultValue: false
  },
  {
    key: 'bPvEAllowTribeWarCancel',
    nameFr: 'Autoriser l\'annulation des guerres de tribus en PvE',
    description: 'Permet aux tribus d\'annuler une guerre déjà déclarée en mode PvE.',
    defaultValue: false
  },
  {
    key: 'bPvEDisableFriendlyFire',
    nameFr: 'Désactiver le tir ami en PvE',
    description: 'Désactive les dommages causés par les membres de la tribu ou de l\'alliance.',
    defaultValue: true
  }
  // autres paramètres PvE ou modes de jeu ici
];
