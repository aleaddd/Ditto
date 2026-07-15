import type { HuntModifier } from "./types";


export const MODIFIERS: HuntModifier[] = [

    {
        id: "shiny_charm",
        name: "Shiny Charm",
        description: "A mystical charm that increases the chances of encountering shiny Pokémon.",
        extraRolls: 2
    },


    // ==========================================
    // Scarlet / Violet
    // ==========================================

    {
        id: "sparkling_power_lv1",
        name: "Sparkling Power Lv. 1",
        description: "Sandwich  that provides a shiny bonus.",
        extraRolls: 1
    },

    {
        id: "sparkling_power_lv2",
        name: "Sparkling Power Lv. 2",
        description: "Sandwich that provides a significant shiny bonus.",
        extraRolls: 2
    },

    {
        id: "sparkling_power_lv3",
        name: "Sparkling Power Lv. 3",
        description: "Sandwich that provides a massive shiny bonus.",
        extraRolls: 3
    },


    // ==========================================
    // Legends: Z-A
    // ==========================================

    {
        id: "donut_power_lv1",
        name: "Donut Power Lv. 1",
        description: "Legends: Z-A donut effect that boosts shiny odds.",
        extraRolls: 1
    },

    {
        id: "donut_power_lv2",
        name: "Donut Power Lv. 2",
        description: "Legends: Z-A donut effect that significantly boosts shiny odds.",
        extraRolls: 2
    },

    {
        id: "donut_power_lv3",
        name: "Donut Power Lv. 3",
        description: "Legends: Z-A donut effect that massively boosts shiny odds.",
        extraRolls: 3
    },
    {
        id: "community_day",
        name: "Community Day",
        description: "Event boosted shiny rates.",
        oddsOverride: 25
    }


];