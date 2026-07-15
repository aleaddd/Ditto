// src/lib/methodlist.ts

import type { HuntMethod } from "./types";


export const METHODS_BY_GAME: Record<string, HuntMethod[]> = {


    // ==========================================
    // Generation II
    // ==========================================

    gs: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard encounters, gifts and eggs.",
            calculateRolls: () => 0
        },
        {
            id: "breeding",
            name: "Shiny Breeding",
            description: "Breeding using a shiny parent or compatible DV combinations.",
            calculateRolls: () => 0
        }
    ],


    crystal: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard encounters, gifts and eggs.",
            calculateRolls: () => 0
        },
        {
            id: "breeding",
            name: "Shiny Breeding",
            description: "Breeding using a shiny parent or compatible DV combinations.",
            calculateRolls: () => 0
        }
    ],



    // ==========================================
    // Generation III
    // ==========================================

    rs: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard encounters, gifts and eggs.",
            calculateRolls: () => 0
        }
    ],


    emerald: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard encounters, gifts and eggs.",
            calculateRolls: () => 0
        }
    ],


    frlg: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard encounters, gifts and eggs.",
            calculateRolls: () => 0
        }
    ],



    // ==========================================
    // Generation IV
    // ==========================================

    dp: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard encounters.",
            calculateRolls: () => 0
        },
        {
            id: "pokeradar",
            name: "Poké Radar",
            description: "Chain encounters in shaking grass to boost shiny odds.",
            calculateOdds: calculatePokeradar
        },
        {
            id: "masuda",
            name: "Masuda Method",
            description: "Breeding two Pokémon from different language games.",
            calculateRolls: () => 5
        }
    ],


    platinum: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard encounters.",
            calculateRolls: () => 0
        },
        {
            id: "pokeradar",
            name: "Poké Radar",
            description: "Chain encounters in shaking grass to boost shiny odds.",
            calculateOdds: calculatePokeradar
        },
        {
            id: "masuda",
            name: "Masuda Method",
            description: "Breeding two Pokémon from different language games.",
            calculateRolls: () => 5
        }
    ],


    hgss: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard encounters.",
            calculateRolls: () => 0
        },
        {
            id: "masuda",
            name: "Masuda Method",
            description: "Breeding two Pokémon from different language games.",
            calculateRolls: () => 5
        }
    ],



    // ==========================================
    // Generation V
    // ==========================================

    bw: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard encounters.",
            calculateRolls: () => 0
        },
        {
            id: "masuda",
            name: "Masuda Method",
            description: "Breeding two Pokémon from different language games.",
            calculateRolls: () => 5
        }
    ],


    bw2: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard encounters.",
            calculateRolls: () => 0
        },
        {
            id: "masuda",
            name: "Masuda Method",
            description: "Breeding two Pokémon from different language games.",
            calculateRolls: () => 5
        }
    ],



    // ==========================================
    // Generation VI
    // ==========================================

    xy: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard encounters.",
            calculateRolls: () => 0
        },
        {
            id: "friend_safari",
            name: "Friend Safari",
            description: "Friend Safari encounters have increased shiny odds.",
            calculateOdds: () => 512
        },
        {
            id: "pokeradar",
            name: "Poké Radar",
            description: "Chain encounters in shaking grass.",
            calculateOdds: calculatePokeradar
        },
        {
            id: "chain_fishing",
            name: "Chain Fishing",
            description: "Fish continuously without breaking the chain.",
            calculateOdds: calculateChainFishing
        },
        {
            id: "masuda",
            name: "Masuda Method",
            description: "Breeding two Pokémon from different language games.",
            calculateRolls: () => 5
        }
    ],


    oras: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard encounters.",
            calculateRolls: () => 0
        },
        {
            id: "dexnav",
            name: "DexNav Chaining",
            description: "Search repeatedly with the DexNav to improve odds.",
            calculateOdds: calculateDexNav
        },
        {
            id: "masuda",
            name: "Masuda Method",
            description: "Breeding two Pokémon from different language games.",
            calculateRolls: () => 5
        }
    ],



    // ==========================================
    // Generation VII
    // ==========================================

    sm: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard wild encounters without modifiers.",
            calculateRolls: () => 0
        },
        {
            id: "sos",
            name: "SOS Chaining",
            description: "Call-in allies build up a chain for boosted odds.",
            calculateRolls: calculateSOS
        },
        {
            id: "masuda",
            name: "Masuda Method",
            description: "Breeding two Pokémon from different languages.",
            calculateRolls: () => 5
        }
    ],


    usum: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard wild encounters without modifiers.",
            calculateRolls: () => 0
        },
        {
            id: "sos",
            name: "SOS Chaining",
            description: "Call-in allies build up a chain for boosted odds.",
            calculateRolls: calculateSOS
        },
        {
            id: "ultra_wormhole",
            name: "Ultra Wormhole",
            description: "Travel farther through Ultra Space to greatly increase shiny odds.",
            calculateOdds: calculateUltraWormhole
        },
        {
            id: "masuda",
            name: "Masuda Method",
            description: "Breeding two Pokémon from different languages.",
            calculateRolls: () => 5
        }
    ],


    lgpe: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard overworld encounters.",
            calculateRolls: () => 0
        },
        {
            id: "catch_combo",
            name: "Catch Combo",
            description: "Catch the same species repeatedly to improve shiny odds.",
            calculateOdds: calculateCatchCombo
        }
    ],



    // ==========================================
    // Generation VIII
    // ==========================================

    swsh: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard encounters.",
            calculateRolls: () => 0
        },
        {
            id: "brilliant",
            name: "Brilliant Pokémon",
            description: "Brilliant Aura Pokémon benefit from KO count bonuses.",
            calculateRolls: calculateBrilliant
        },
        {
            id: "dynamax_adventures",
            name: "Dynamax Adventures",
            description: "Each Pokémon at the end of an Adventure has independent shiny odds.",
            calculateOdds: () => 100
        },
        {
            id: "masuda",
            name: "Masuda Method",
            description: "Breeding two Pokémon from different languages.",
            calculateRolls: () => 5
        }
    ],


    bdsp: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard wild encounters or standard underground.",
            calculateRolls: () => 0
        },
        {
            id: "radar",
            name: "Poké Radar",
            description: "Grassy patch shaking method. Best chained to 40.",
            calculateOdds: calculatePokeradar
        },
        {
            id: "masuda",
            name: "Masuda Method",
            description: "Breeding two Pokémon from different languages.",
            calculateRolls: () => 5
        }
    ],


    pla: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard overworld encounters.",
            calculateRolls: () => 0
        },
        {
            id: "mass_outbreak",
            name: "Mass Outbreak",
            description: "Outbreaks significantly increase shiny odds.",
            calculateRolls: () => 12
        },
        {
            id: "massive_mass_outbreak",
            name: "Massive Mass Outbreak",
            description: "Special outbreaks unlocked after the main story.",
            calculateRolls: () => 12
        }
    ],



    // ==========================================
    // Generation IX
    // ==========================================

    sv: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard wild spawns with no active sandwiches.",
            calculateRolls: () => 0
        },
        {
            id: "outbreak",
            name: "Mass Outbreaks",
            description: "Clearing 60+ outbreak Pokémon boosts your odds.",
            calculateRolls: calculateSVOutbreak
        },
        {
            id: "masuda",
            name: "Masuda Method",
            description: "Picnic breeding with foreign parents.",
            calculateRolls: () => 5
        }
    ],


    plza: [
        {
            id: "full_odds",
            name: "Full Odds",
            description: "Standard encounters.",
            calculateRolls: () => 0
        }
    ]


};
go: [

    {
        id: "wild",
        name: "Wild Encounter",
        description: "Standard wild Pokémon encounters.",
        calculateOdds: () => 512
    },


    {
        id: "legendary_raid",
        name: "Legendary Raid",
        description: "Legendary Pokémon from raids.",
        calculateOdds: () => 20
    },


    {
        id: "mega_raid",
        name: "Mega Raid",
        description: "Mega Pokémon raid encounters.",
        calculateOdds: () => 64
    },


    {
        id: "research",
        name: "Research Encounter",
        description: "Field research and timed research encounters.",
        calculateOdds: () => 512
    },


    {
        id: "egg",
        name: "Egg Hatch",
        description: "Pokémon obtained from eggs.",
        calculateOdds: () => undefined
    }

]



// ==========================================
// Calculation Helpers
// ==========================================


function calculateSOS(count = 0): number {

    if (count >= 31)
        return 12;

    if (count >= 21)
        return 8;

    if (count >= 11)
        return 4;

    return 0;
}



function calculateSVOutbreak(count = 0): number {

    if (count >= 60)
        return 2;

    if (count >= 30)
        return 1;

    return 0;
}



function calculateBrilliant(count = 0): number {

    if (count >= 500)
        return 2;

    if (count >= 300)
        return 1;

    return 0;
}



function calculatePokeradar(chain = 0): number {

    if (chain >= 40)
        return 99;

    if (chain <= 0)
        return 4096;


    return Math.max(
        99,
        Math.floor(4096 / (1 + chain / 4))
    );
}



function calculateChainFishing(chain = 0): number {

    if (chain >= 20)
        return 100;

    if (chain >= 10)
        return 200;

    return 4096;
}



function calculateDexNav(searchLevel = 0): number {

    // TODO:
    // DexNav depends on search level and species.
    // Placeholder until full formula is implemented.

    return Math.max(
        1,
        Math.floor(4096 / (1 + searchLevel / 100))
    );
}



function calculateUltraWormhole(distance = 0): number {

    // TODO:
    // Ultra Wormhole depends on portal rarity and distance.
    // Placeholder approximation.

    if (distance >= 5000)
        return 100;

    return 4096;
}



function calculateCatchCombo(combo = 0): number {

    if (combo >= 31)
        return 341;

    if (combo >= 11)
        return 1024;

    return 4096;
}