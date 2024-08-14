export const PVP_SETTINGS = [
  {
    key: 'bIncreasePvPRespawnInterval',
    nameFr: 'Augmenter l\'intervalle de réapparition en PvP',
    description: 'Active l\'augmentation de l\'intervalle de réapparition après une mort en PvP.',
    defaultValue: false
  },
  {
    key: 'IncreasePvPRespawnIntervalCheckPeriod',
    nameFr: 'Période de vérification pour l\'augmentation de l\'intervalle de réapparition en PvP',
    description: 'Définit la période pendant laquelle les décès successifs en PvP sont comptabilisés pour augmenter l\'intervalle de réapparition.',
    defaultValue: 300 // valeur en secondes, par exemple
  },
  {
    key: 'IncreasePvPRespawnIntervalMultiplier',
    nameFr: 'Multiplicateur d\'augmentation de l\'intervalle de réapparition en PvP',
    description: 'Définit le multiplicateur qui augmente l\'intervalle de réapparition après des décès successifs en PvP.',
    defaultValue: 1.5
  },
  {
    key: 'IncreasePvPRespawnIntervalBaseAmount',
    nameFr: 'Montant de base de l\'intervalle de réapparition en PvP',
    description: 'Définit la durée de base de l\'intervalle de réapparition en PvP avant que le multiplicateur ne soit appliqué.',
    defaultValue: 60 // valeur en secondes
  },
  {
    key: 'bDisableFriendlyFire',
    nameFr: 'Désactiver le friendly fire en PvP',
    description: 'Empêche les joueurs d\'infliger des dégâts à leurs alliés en mode PvP.',
    defaultValue: false
  },
  {
    key: 'PvPZoneStructureDamageMultiplier',
    nameFr: 'Multiplicateur de dégâts sur les structures en zone PvP',
    description: 'Ajuste les dégâts infligés aux structures dans les zones de PvP.',
    defaultValue: 1.0
  },
  {
    key: 'PreventOfflinePvPConnectionInvincibleInterval',
    nameFr: 'Intervalle d\'invincibilité après une reconnexion en PvP hors ligne',
    description: 'Définit la durée pendant laquelle les joueurs sont invincibles après avoir reconnecté à un serveur PvP avec protection hors ligne.',
    defaultValue: 300 // par exemple, 300 secondes
  },
  // autres paramètres PvP ici
];
