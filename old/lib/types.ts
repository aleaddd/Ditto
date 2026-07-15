export interface Game {

  id: string;

  name: string;

  generation: number;

  baseOdds: number;

  calculationType?: "rolls" | "direct";

}

export interface HuntMethod {
  id: string;
  name: string;
  description: string;

  // Optional shiny calculation logic
  calculateRolls?: (count?: number) => number;

  // Optional special calculator (Radar is not roll based)
  calculateOdds?: (count?: number) => number;
}

export interface HuntModifier {

  id:string;

  name:string;

  description:string;

  extraRolls?:number;

  oddsOverride?:number;

}

export interface PokemonSpecies {
  id: string;
  dexId: number;
  name: string;
  formName?: string;
  spriteId?: number;
}