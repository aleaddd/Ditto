import type { HuntModifier } from "./types";


export const GO_MODIFIERS: HuntModifier[] = [


  // ==========================================
  // Permanent / Common GO rates
  // ==========================================


  {
    id: "go_legendary_raid",
    name: "Legendary Raid",
    description: "Legendary Pokémon encountered from raids.",
    oddsOverride: 20
  },


  {
    id: "go_mega_raid",
    name: "Mega Raid",
    description: "Mega Pokémon encountered from raids.",
    oddsOverride: 64
  },


  // ==========================================
  // Events
  // ==========================================


  {
    id: "go_raid_day",
    name: "Raid Day",
    description: "GO Raid Day boosted shiny rate.",
    oddsOverride: 10
  },


  {
    id: "go_community_day",
    name: "Community Day",
    description: "Community Day boosted shiny rate.",
    oddsOverride: 25
  },


  {
    id: "go_go_fest",
    name: "GO Fest",
    description: "GO Fest boosted shiny rate (typical recent rate).",
    oddsOverride: 128
  },


  {
    id: "go_tour",
    name: "GO Tour",
    description: "GO Tour event boosted shiny rate.",
    oddsOverride: 128
  },


  {
    id: "go_safari_zone",
    name: "Safari Zone",
    description: "GO Safari Zone event boosted shiny rate.",
    oddsOverride: 64
  },


  {
    id: "go_research_day",
    name: "Research Day",
    description: "Research Day boosted shiny rate.",
    oddsOverride: 10
  },


  {
    id: "go_spotlight_hour",
    name: "Spotlight Hour",
    description: "Spotlight Hour event. Usually no shiny boost unless specified.",
    oddsOverride: undefined
  }


];