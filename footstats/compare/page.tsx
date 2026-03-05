"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import RadarStats from "../../components/RadarStats";
import StatsTable from "../../components/StatsTable";
import WinnerBanner from "../../components/WinnerBanner";
import { PLAYERS } from "../../components/lib/data";
import { comparePlayers } from "../../components/lib/scoring";

function findPlayer(id: string | null) {
  if (!id) return undefined;
  return PLAYERS.find((p) => p.id === id);
}

function firstDifferentId(id: string) {
  const other = PLAYERS.find((p) => p.id !== id);
  return other ? other.id : id;
}

export default function ComparePage() {
  const sp = useSearchParams();

  const aInit = findPlayer(sp.get("a"))?.id ?? PLAYERS[0]?.id ?? "";
  const bInit = findPlayer(sp.get("b"))?.id ?? firstDifferentId(aInit);

  const [aId, setAId] = useState<string>(aInit);
  const [bId, setBId] = useState<string>(bInit);

  const safeBId = useMemo(() => {
    if (!bId) return firstDifferentId(aId);
    if (bId !== aId) return bId;
    return firstDifferentId(aId);
  }, [aId, bId]);

  const a = useMemo(() => PLAYERS.find((p) => p.id === aId), [aId]);
  const b = useMemo(() => PLAYERS.find((p) => p.id === safeBId), [safeBId]);

  if (!a || !b) {
    return (
      <main className="p-6">
        <a className="underline" href="/">← Accueil</a>
        <div className="mt-4 border rounded-3xl bg-white p-6">
          Impossible de charger les joueurs (liste vide ou IDs invalides).
        </div>
      </main>
    );
  }

  const result = useMemo(() => comparePlayers(a, b), [a, b]);

  const title =
    result.winner === "EGALITE"
      ? "Égalité parfaite"
      : result.winner === a.id
      ? `${a.name} est le meilleur`
      : `${b.name} est le meilleur`;

  const subtitle =
    result.winner === "EGALITE"
      ? `Scores: ${result.scoreA} vs ${result.scoreB}`
      : `Scores: ${result.scoreA} vs ${result.scoreB} (pondéré selon le poste)`;

  return (
    <main className="flex flex-col gap-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-black">Comparer</h1>
          <p className="text-gray-600 mt-1">Radar + score + gagnant.</p>
        </div>
        <a className="underline" href="/">← Accueil</a>
      </div>

      <WinnerBanner title={title} subtitle={subtitle} />

      <div className="grid lg:grid-cols-2 gap-6">
        <section className="border rounded-3xl bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-xs text-gray-500">Joueur A</div>
              <div className="font-black text-lg">{a.name}</div>
              <div className="text-sm text-gray-600">{a.club} • {a.country} • {a.position}</div>
            </div>
            <div className="text-sm">
              Score <span className="font-black">{result.scoreA}</span>/100
            </div>
          </div>

          <div className="mt-3">
            <select className="w-full border rounded-2xl px-3 py-3" value={aId} onChange={(e) => setAId(e.target.value)}>
              {PLAYERS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.position})
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <RadarStats stats={a.stats} />
            <StatsTable stats={a.stats} />
          </div>
        </section>

        <section className="border rounded-3xl bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-xs text-gray-500">Joueur B</div>
              <div className="font-black text-lg">{b.name}</div>
              <div className="text-sm text-gray-600">{b.club} • {b.country} • {b.position}</div>
            </div>
            <div className="text-sm">
              Score <span className="font-black">{result.scoreB}</span>/100
            </div>
          </div>

          <div className="mt-3">
            <select className="w-full border rounded-2xl px-3 py-3" value={safeBId} onChange={(e) => setBId(e.target.value)}>
              {PLAYERS.map((p) => (
                <option key={p.id} value={p.id} disabled={p.id === aId}>
                  {p.name} ({p.position})
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <RadarStats stats={b.stats} />
            <StatsTable stats={b.stats} />
          </div>
        </section>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="border rounded-3xl bg-white p-4">
          <div className="font-black">Avantages {a.name}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {result.aTop.length === 0 ? (
              <span className="text-sm text-gray-600">Aucun avantage net.</span>
            ) : (
              result.aTop.map((x) => (
                <span key={x.label} className="text-xs px-3 py-2 rounded-full border bg-gray-50">
                  {x.label} <span className="font-black">{Math.round(x.diff)}</span>
                </span>
              ))
            )}
          </div>
        </div>

        <div className="border rounded-3xl bg-white p-4">
          <div className="font-black">Avantages {b.name}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {result.bTop.length === 0 ? (
              <span className="text-sm text-gray-600">Aucun avantage net.</span>
            ) : (
              result.bTop.map((x) => (
                <span key={x.label} className="text-xs px-3 py-2 rounded-full border bg-gray-50">
                  {x.label} <span className="font-black">{Math.abs(Math.round(x.diff))}</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}