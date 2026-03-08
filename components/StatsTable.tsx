"use client";

import type { PlayerStats } from "./lib/types/player";
import { STAT_KEYS, STAT_LABEL } from "./lib/stats";

export default function StatsTable({ stats }: { stats: PlayerStats }) {
  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr>
          <th className="text-left pb-2">Stat</th>
          <th className="text-right pb-2">Valeur</th>
        </tr>
      </thead>
      <tbody>
        {STAT_KEYS.map((key) => (
          <tr key={key} className="border-t">
            <td className="py-1 font-medium">{STAT_LABEL[key]}</td>
            <td className="py-1 text-right">{stats[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}