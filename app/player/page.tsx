"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import RadarStats from "../../../components/RadarStats";
import StatsTable from "../../../components/StatsTable";
import WinnerBanner from "../../../components/WinnerBanner";
import { PLAYERS } from "../../../components/lib/data";
import { scorePlayer } from "../../../components/lib/scoring";

export default function PlayerPage() {
  const params = useParams() as { id?: string | string[] };
  const rawId = params.id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;

  const player = useMemo(() => PLAYERS.find((p) => p.id === id), [id]);

  if (!player) {
    return (
      <main className="p-6 flex flex-col gap-4">
        <a className="underline" href="/">← Accueil</a>
        <div className="border rounded-3xl p-6 bg-white">Joueur introuvable.</div>
      </main>
    );
  }

  const score = scorePlayer(player);

  return (
    <main className="flex flex-col gap-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-black">{player.name}</h1>
          <p className="text-gray-600 mt-1">
            {player.club} • {player.country} • {player.position} • {player.age} ans
          </p>
        </div>
        <a className="underline" href="/">← Accueil</a>
      </div>

      <WinnerBanner title={`Score global: ${score}/100`} subtitle="Calculé avec des poids selon le poste." />

      <div className="grid lg:grid-cols-2 gap-6">
        <RadarStats stats={player.stats} />
        <StatsTable stats={player.stats} />
      </div>

      <div className="border rounded-3xl bg-white p-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div>
          <div className="font-black">Comparer ce joueur</div>
          <div className="text-sm text-gray-600">Choisis un adversaire dans la page comparer.</div>
        </div>
        <a
          className="inline-flex justify-center px-4 py-3 rounded-2xl bg-black text-white hover:opacity-90"
          href={`/compare?a=${encodeURIComponent(player.id)}`}
        >
          Ouvrir Comparer →
        </a>
      </div>
    </main>
  );
}