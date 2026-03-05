"use client";

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

import type { PlayerStats } from "./lib/types/player";
import { toRadarData } from "./lib/stats";

export default function RadarStats({ stats }: { stats: PlayerStats }) {
  const data = toRadarData(stats);

  return (
    <div className="border rounded-3xl bg-white p-3 h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="stat" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar dataKey="value" strokeWidth={2} fillOpacity={0.12} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}