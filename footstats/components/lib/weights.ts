import type { Player, PlayerStats } from "./types/player";

export const DEFAULT_WEIGHTS: Record<Player["position"], PlayerStats> = {
  ATT: { tir: 0.3, vitesse: 0.2, dribble: 0.2, passe: 0.15, physique: 0.1, defense: 0.05 },
  MIL: { passe: 0.3, dribble: 0.2, defense: 0.15, vitesse: 0.15, physique: 0.1, tir: 0.1 },
  DEF: { defense: 0.35, physique: 0.2, passe: 0.15, vitesse: 0.15, dribble: 0.05, tir: 0.1 },
};