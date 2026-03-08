"use client";

import type { PlayerStats } from "./lib/types/player";
import { STAT_KEYS, STAT_LABEL } from "./lib/stats";

export default function StatsTable({ stats }: { stats: PlayerStats }) {
  return (
    <div className="border rounded-3xl overflow-hidden bg-white">
      {STAT_KEYS.map((k) => (
        <div key={k} className="flex items-center justify-between px-4 py-3 border-b last:border-b-0">
          <span className="text-sm text-gray-700">{STAT_LABEL[k]}</span>
          <span className="font-black">{stats[k]}</span>
        </div>
      ))}
    </div>
  );
}