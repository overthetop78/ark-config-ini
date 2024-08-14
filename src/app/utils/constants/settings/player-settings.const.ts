export const PLAYER_SETTINGS = [
  {
    key: 'bAllowUnlimitedRespecs',
    nameFr: 'Autoriser les respecs illimités',
    description: 'Permet aux joueurs de réinitialiser leurs points de compétences de manière illimitée.',
    defaultValue: false
  },
  {
    key: 'HairGrowthSpeedMultiplier',
    nameFr: 'Multiplicateur de la vitesse de croissance des cheveux',
    description: 'Contrôle la vitesse à laquelle les cheveux et la barbe des personnages poussent.',
    defaultValue: 1.0
  },
  {
    key: 'bUseCorpseLocator',
    nameFr: 'Activer le localisateur de corps',
    description: 'Permet aux joueurs de localiser leur corps après la mort grâce à un indicateur visuel.',
    defaultValue: false
  },
  {
    key: 'KickIdlePlayersPeriod',
    nameFr: 'Période avant expulsion des joueurs inactifs',
    description: 'Contrôle le temps d\'inactivité avant qu\'un joueur soit expulsé du serveur.',
    defaultValue: 1800 // 30 minutes
  },
  {
    key: 'CraftingSkillBonusMultiplier',
    nameFr: 'Multiplicateur de bonus de compétence d\'artisanat',
    description: 'Augmente ou diminue le bonus appliqué aux objets créés en fonction de la compétence d\'artisanat du joueur. Un multiplicateur plus élevé signifie que les objets auront des statistiques plus élevées lorsque la compétence d\'artisanat est améliorée.',
    defaultValue: 1.0
  }
  // d'autres paramètres liés aux joueurs ici
];
