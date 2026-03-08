"use client";

import { useMemo, useState } from "react";
import type { Player } from "./lib/types/player";

export default function CompareBox({ players }: { players: Player[] }) {
  const [aId, setAId] = useState(players[0]?.id ?? "");
  const [bId, setBId] = useState(players[1]?.id ?? players[0]?.id ?? "");

  const a = useMemo(() => players.find((p) => p.id === aId), [players, aId]);

  // Empêche A=B
  const safeBId = useMemo(() => {
    if (!bId) return "";
    if (bId !== aId) return bId;
    const other = players.find((p) => p.id !== aId);
    return other ? other.id : bId;
  }, [bId, aId, players]);

  const b = useMemo(() => players.find((p) => p.id === safeBId), [players, safeBId]);

  return (
    <div className="border rounded-3xl p-4 bg-white">
      <div className="flex items-center justify-between">
        <div className="font-black text-lg">Comparer</div>
        <a className="text-sm underline" href="/compare">
          Ouvrir →
        </a>
      </div>

      <div className="text-sm text-gray-600 mt-1">
        Sélectionne 2 joueurs et lance la comparaison.
      </div>

      <div className="mt-4 grid gap-3">
        <div>
          <div className="text-xs text-gray-600 mb-1">Joueur A</div>
          <select
            className="w-full border rounded-2xl px-3 py-3"
            value={aId}
            onChange={(e) => setAId(e.target.value)}
          >
            {players.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.position})
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="text-xs text-gray-600 mb-1">Joueur B</div>
          <select
            className="w-full border rounded-2xl px-3 py-3"
            value={safeBId}
            onChange={(e) => setBId(e.target.value)}
          >
            {players.map((p) => (
              <option key={p.id} value={p.id} disabled={p.id === aId}>
                {p.name} ({p.position})
              </option>
            ))}
          </select>
        </div>

        <a
          className="mt-1 inline-flex justify-center px-4 py-3 rounded-2xl bg-black text-white hover:opacity-90"
          href={`/compare?a=${encodeURIComponent(a?.id ?? "")}&b=${encodeURIComponent(b?.id ?? "")}`}
        >
          Comparer maintenant
        </a>
      </div>
    </div>
  );
}