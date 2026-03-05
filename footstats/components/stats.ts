import type { PlayerStats } from "./types/player";

export const STAT_KEYS: (keyof PlayerStats)[] = [
  "vitesse",
  "physique",
  "passe",
  "defense",
  "dribble",
  "tir",
];

export const STAT_LABEL: Record<keyof PlayerStats, string> = {
  vitesse: "Vitesse",
  physique: "Physique",
  passe: "Passe",
  defense: "Défense",
  dribble: "Dribble",
  tir: "Tir",
};

export function clamp01to100(n: number) {
  return Math.max(0, Math.min(100, n));
}

export function toRadarData(stats: PlayerStats) {
  return [
    { stat: "VIT", value: clamp01to100(stats.vitesse) },
    { stat: "PHY", value: clamp01to100(stats.physique) },
    { stat: "PAS", value: clamp01to100(stats.passe) },
    { stat: "DEF", value: clamp01to100(stats.defense) },
    { stat: "DRI", value: clamp01to100(stats.dribble) },
    { stat: "TIR", value: clamp01to100(stats.tir) },
  ];
}