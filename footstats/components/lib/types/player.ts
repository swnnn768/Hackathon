export type PlayerStats = {
  vitesse: number;
  physique: number;
  passe: number;
  defense: number;
  dribble: number;
  tir: number;
};

export type Position = "ATT" | "MIL" | "DEF";

export type Player = {
  id: string;
  name: string;
  club: string;
  country: string;
  position: Position;
  age: number;
  stats: PlayerStats;
};