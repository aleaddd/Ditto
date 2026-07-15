// src/lib/gamelist.ts
// src/lib/gamelist.ts
import type { Game } from "./types";

export const GAMES: Game[] = [
  // Generation II
  { id: "gs", name: "Gold / Silver", generation: 2, baseOdds: 8192 },
  { id: "crystal", name: "Crystal", generation: 2, baseOdds: 8192 },

  // Generation III
  { id: "rs", name: "Ruby / Sapphire", generation: 3, baseOdds: 8192 },
  { id: "eme", name: "Emerald", generation: 3, baseOdds: 8192 },
  { id: "frlg", name: "FireRed / LeafGreen", generation: 3, baseOdds: 8192 },

  // Generation IV
  { id: "dp", name: "Diamond / Pearl", generation: 4, baseOdds: 8192 },
  { id: "platinum", name: "Platinum", generation: 4, baseOdds: 8192 },
  { id: "hgss", name: "HeartGold / SoulSilver", generation: 4, baseOdds: 8192 },

  // Generation V
  { id: "bw", name: "Black / White", generation: 5, baseOdds: 8192 },
  { id: "bw2", name: "Black 2 / White 2", generation: 5, baseOdds: 8192 },

  // Generation VI
  { id: "xy", name: "X / Y", generation: 6, baseOdds: 4096 },
  { id: "oras", name: "Omega Ruby / Alpha Sapphire", generation: 6, baseOdds: 4096 },

  // Generation VII
  { id: "sm", name: "Sun / Moon", generation: 7, baseOdds: 4096 },
  { id: "usum", name: "Ultra Sun / Ultra Moon", generation: 7, baseOdds: 4096 },

  // Generation VIII
  { id: "lgpe", name: "Let's Go Pikachu / Eevee", generation: 7, baseOdds: 4096 },
  { id: "swsh", name: "Sword / Shield", generation: 8, baseOdds: 4096 },
  { id: "bdsp", name: "Brilliant Diamond / Shining Pearl", generation: 8, baseOdds: 4096 },
  { id: "pla", name: "Legends: Arceus", generation: 8, baseOdds: 4096 },

  // Generation IX
  { id: "sv", name: "Scarlet / Violet", generation: 9, baseOdds: 4096 },
  { id: "plza", name: "Legends: Z-A", generation: 9, baseOdds: 4096 },

  //Others
    {
  id:"go",
  name:"Pokémon GO",
  generation:0,
  baseOdds:512,
  calculationType:"direct"
}
]