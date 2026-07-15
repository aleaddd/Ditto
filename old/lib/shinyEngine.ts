import { GAMES } from "./gamelist";
import { METHODS_BY_GAME } from "./methodlist";
import { MODIFIERS } from "./modifiers";


interface HuntOptions {

    gameId: string;

    methodId: string;

    count?: number;

    modifiers?: string[];

}



export function calculateOdds(
  options: HuntOptions
): number {


  const game = GAMES.find(
    g => g.id === options.gameId
  );


  if (!game)
    return 4096;



  /*
    CHECK OVERRIDES FIRST
  */

  const override =
    applyOddsOverride(
      options.modifiers ?? []
    );


  if(override)
    return override;



  let extraRolls = 0;



    /*
      METHOD
    */


    const method =
        METHODS_BY_GAME[options.gameId]
            ?.find(
                m => m.id === options.methodId
            );



    if (!method)
        return game.baseOdds;



    // Special methods with their own odds formula
    if (method.calculateOdds) {

        return method.calculateOdds(
            options.count ?? 0
        );

    }



    // Normal methods using extra rolls
    if (method.calculateRolls) {

        extraRolls += method.calculateRolls(
            options.count ?? 0
        );

    }



    /*
      MODIFIERS
    */


    extraRolls += applyModifiers(
        options.modifiers ?? []
    );



    /*
      FINAL CALCULATION
    */


    return Math.max(
        1,
        Math.floor(
            game.baseOdds /
            (1 + extraRolls)
        )
    );

}





function applyModifiers(
    modifiers: string[]
): number {


    let extraRolls = 0;


    for (const id of modifiers) {


        const modifier =
            MODIFIERS.find(
                m => m.id === id
            );


        if (modifier?.extraRolls) {

            extraRolls += modifier.extraRolls;

        }

    }


    return extraRolls;



}

function applyOddsOverride(
    modifiers: string[]
): number | undefined {


    for (const id of modifiers) {


        const modifier =
            MODIFIERS.find(
                m => m.id === id
            );


        if (modifier?.oddsOverride) {

            return modifier.oddsOverride;

        }

    }


    return undefined;

}
