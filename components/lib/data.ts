import type { Player } from "./types/player";

export const PLAYERS: Player[] = [
  {
    id: "mbappe",
    name: "Kylian Mbappé",
    club: "Real Madrid",
    country: "France",
    position: "ATT",
    age: 27,
    stats: { vitesse: 97, physique: 78, passe: 80, defense: 36, dribble: 92, tir: 89 },
  },
  {
    id: "haaland",
    name: "Erling Haaland",
    club: "Manchester City",
    country: "Norway",
    position: "ATT",
    age: 25,
    stats: { vitesse: 89, physique: 91, passe: 65, defense: 45, dribble: 80, tir: 93 },
  },
  {
    id: "debruyne",
    name: "Kevin De Bruyne",
    club: "Manchester City",
    country: "Belgium",
    position: "MIL",
    age: 34,
    stats: { vitesse: 76, physique: 74, passe: 93, defense: 60, dribble: 86, tir: 86 },
  },
  {
    id: "vandijk",
    name: "Virgil van Dijk",
    club: "Liverpool",
    country: "Netherlands",
    position: "DEF",
    age: 34,
    stats: { vitesse: 79, physique: 90, passe: 71, defense: 92, dribble: 70, tir: 60 },
  },
];