export interface EngramPointsInterface {
  last_point: number;      // Le dernier nombre de points attribué pour cet engramme
  before_points: number;   // Le nombre de points avant le changement
}

export interface LevelEngramPointsInterface {
  level: number;                                // Numéro du niveau
  points_max: number;                           // Nombre de points maximum pour ce niveau
  points_attribute: number;                     // Nombre de points déjà attribués
  points_engrams: { [key: number]: EngramPointsInterface }; // Les points pour chaque engramme
}
