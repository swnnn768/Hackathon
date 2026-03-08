import type { PlayerStats } from "./types/player";

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