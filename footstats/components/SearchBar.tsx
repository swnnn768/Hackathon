"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  const [q, setQ] = useState("");

  return (
    <div className="flex gap-2 w-full max-w-xl">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Chercher un joueur (ex: Mbappé)"
        className="flex-1 border rounded-xl px-3 py-2"
      />
      <button
        onClick={() => onSearch(q)}
        className="px-4 py-2 rounded-xl bg-black text-white"
      >
        Rechercher
      </button>
    </div>
  );
}