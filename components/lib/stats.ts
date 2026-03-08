import type { PlayerStats } from "./types/player";


export const STAT_KEYS = ["vitesse","tir","passe","dribble","defense","physique"] as const;

export const STAT_LABEL: Record<string,string> = {
  vitesse: "VIT",
  tir: "TIR",
  passe: "PAS",
  dribble: "DRI",
  defense: "DEF",
  physique: "PHY"
};

// Fonction utilitaire existante
export function clamp01to100(n: number) {
  return Math.max(0, Math.min(100, n));
}

// Fonction radar existante
export function toRadarData(stats: PlayerStats) {
  return [
    { stat: STAT_LABEL.vitesse, value: clamp01to100(stats.vitesse) },
    { stat: STAT_LABEL.physique, value: clamp01to100(stats.physique) },
    { stat: STAT_LABEL.passe, value: clamp01to100(stats.passe) },
    { stat: STAT_LABEL.defense, value: clamp01to100(stats.defense) },
    { stat: STAT_LABEL.dribble, value: clamp01to100(stats.dribble) },
    { stat: STAT_LABEL.tir, value: clamp01to100(stats.tir) },
  ];
}