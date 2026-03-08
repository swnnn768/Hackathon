import type { Player, PlayerStats } from "./types/player";
import { DEFAULT_WEIGHTS } from "./weights";
import { STAT_KEYS, clamp01to100, STAT_LABEL } from "./stats";

export function scorePlayer(player: Player, customWeights?: PlayerStats) {
  const w = customWeights ?? DEFAULT_WEIGHTS[player.position];
  const s = player.stats;

  const score =
    clamp01to100(s.vitesse) * w.vitesse +
    clamp01to100(s.physique) * w.physique +
    clamp01to100(s.passe) * w.passe +
    clamp01to100(s.defense) * w.defense +
    clamp01to100(s.dribble) * w.dribble +
    clamp01to100(s.tir) * w.tir;

  return Math.round(score);
}

export function comparePlayers(a: Player, b: Player) {
  const scoreA = scorePlayer(a);
  const scoreB = scorePlayer(b);
  const winner = scoreA === scoreB ? "EGALITE" : scoreA > scoreB ? a.id : b.id;

  const perStat = STAT_KEYS.map((k) => {
    const diff = a.stats[k] - b.stats[k];
    return { key: k, label: STAT_LABEL[k], diff };
  });

  const aTop = perStat.filter((x) => x.diff > 0).sort((x, y) => y.diff - x.diff).slice(0, 3);
  const bTop = perStat.filter((x) => x.diff < 0).sort((x, y) => x.diff - y.diff).slice(0, 3);

  return { scoreA, scoreB, winner, aTop, bTop, perStat };
}