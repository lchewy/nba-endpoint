import {getFunc, getFunc2} from "../utils/getFn";
import both_3_players from "../../definitions/top_3";

const body = {
  type:"object",
  properties: {
    shot_takers: both_3_players
  }
}

export const team_shot_taking = getFunc(
  "Shots taken by key shooters",
  "team_shot_taking",
  "shot_taking_making",
  body,
  "team"
);

export const team_game_shot_taking = getFunc2(
  "Shots taken by key shooters",
  "team_game_shot_taking",
  "shot_taking_making",
  body,
  "team",
  "game"
);
