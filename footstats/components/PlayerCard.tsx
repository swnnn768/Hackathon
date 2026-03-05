"use client";

import Link from "next/link";
import type { Player } from "./lib/types/player";

function posPill(pos: Player["position"]) {
  if (pos === "ATT") return "bg-red-50 text-red-700 border-red-100";
  if (pos === "MIL") return "bg-blue-50 text-blue-700 border-blue-100";
  return "bg-green-50 text-green-700 border-green-100";
}

export default function PlayerCard({
  player,
  isFav,
  onToggleFav,
}: {
  player: Player;
  isFav: boolean;
  onToggleFav: (id: string) => void;
}) {
  return (
    <div className="border rounded-3xl p-4 bg-white hover:shadow-sm transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-lg font-black leading-tight">{player.name}</div>
          <div className="text-sm text-gray-600">
            {player.club} • {player.country} • {player.age} ans
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-1 rounded-full border ${posPill(player.position)}`}>
            {player.position}
          </span>
          <button
            type="button"
            onClick={() => onToggleFav(player.id)}
            className={`text-xs px-2 py-1 rounded-full border ${
              isFav ? "bg-black text-white" : "bg-white hover:bg-gray-50"
            }`}
            aria-label="favorite"
          >
            {isFav ? "★" : "☆"}
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
        <div className="rounded-2xl bg-gray-50 px-3 py-2">VIT {player.stats.vitesse}</div>
        <div className="rounded-2xl bg-gray-50 px-3 py-2">DRI {player.stats.dribble}</div>
        <div className="rounded-2xl bg-gray-50 px-3 py-2">TIR {player.stats.tir}</div>
        <div className="rounded-2xl bg-gray-50 px-3 py-2">PAS {player.stats.passe}</div>
        <div className="rounded-2xl bg-gray-50 px-3 py-2">PHY {player.stats.physique}</div>
        <div className="rounded-2xl bg-gray-50 px-3 py-2">DEF {player.stats.defense}</div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Link className="underline text-sm" href={`/player/${player.id}`}>
          Voir le profil
        </Link>
        <Link
          className="text-sm px-3 py-2 rounded-2xl border hover:bg-gray-50"
          href={`/compare?a=${encodeURIComponent(player.id)}`}
        >
          Comparer →
        </Link>
      </div>
    </div>
  );
}