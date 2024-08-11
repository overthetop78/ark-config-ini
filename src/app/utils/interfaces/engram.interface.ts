export interface EngramInterface {
  nameFr: string;
  name: string;
  codeName: string;
  position: number;
  level?: number | null;
  points?: number | null;
  preReq?: boolean;
  hidden?: boolean;
}
