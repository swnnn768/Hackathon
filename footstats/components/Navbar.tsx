"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-black tracking-tight text-xl">
          Foot<span className="text-gray-500">Stats</span>
        </Link>

        <div className="flex items-center gap-2 text-sm">
          <Link className="px-3 py-2 rounded-xl hover:bg-gray-100" href="/compare">
            Comparer
          </Link>
          <a
            className="px-3 py-2 rounded-xl bg-black text-white hover:opacity-90"
            href="https://github.com/swnnn768/Hackathon"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}