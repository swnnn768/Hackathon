"use client";

import { useEffect, useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import CompareBox from "../components/CompareBox";
import PlayerCard from "../components/PlayerCard";
import { PLAYERS } from "../components/lib/data";

function loadFavs(): string[] {
  try {
    const raw = localStorage.getItem("footstats:favs");
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function saveFavs(ids: string[]) {
  try {
    localStorage.setItem("footstats:favs", JSON.stringify(ids));
  } catch {}
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [favs, setFavs] = useState<string[]>([]);

  useEffect(() => {
    setFavs(loadFavs());
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PLAYERS;
    return PLAYERS.filter((p) => {
      const hay = `${p.name} ${p.club} ${p.country} ${p.position}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  const toggleFav = (id: string) => {
    setFavs((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      saveFavs(next);
      return next;
    });
  };

  const favPlayers = useMemo(() => PLAYERS.filter((p) => favs.includes(p.id)), [favs]);

  return (
    <main className="flex flex-col gap-8">
      <section className="grid lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2">
          <div className="rounded-3xl border bg-white p-6">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              FootStats <span className="text-gray-500">— Compare & décide</span>
            </h1>
            <p className="text-gray-600 mt-2">
              Recherche un joueur, compare deux profils, et obtiens un gagnant via un score pondéré selon le poste.
            </p>

            <div className="mt-5">
              <SearchBar onChange={setQuery} />
              <div className="text-xs text-gray-500 mt-2">
                Exemple : “city”, “France”, “ATT”, “PSG”
              </div>
            </div>
          </div>

          {favPlayers.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div className="font-black">Favoris</div>
                <div className="text-xs text-gray-500">{favPlayers.length} joueur(s)</div>
              </div>
              <div className="mt-3 grid md:grid-cols-2 gap-4">
                {favPlayers.map((p) => (
                  <PlayerCard key={p.id} player={p} isFav={true} onToggleFav={toggleFav} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <CompareBox players={PLAYERS} />
          <div className="mt-4 text-xs text-gray-500">
            Les favoris sont sauvegardés localement (pas besoin de compte).
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <div>
            <div className="font-black text-lg">Joueurs</div>
            <div className="text-sm text-gray-600">{filtered.length} résultat(s)</div>
          </div>
          <a className="text-sm underline" href="/compare">
            Comparer →
          </a>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <PlayerCard key={p.id} player={p} isFav={favs.includes(p.id)} onToggleFav={toggleFav} />
          ))}
        </div>
      </section>
    </main>
  );
}