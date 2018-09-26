import { getFunc, getFunc2 } from "../utils/getFn";
import { possession } from "../../definitions/common";

const body = {
  type: "array",
  items: {
    type: "object",
    properties: possession
  }
};

export const game_possession = getFunc(
  "home and away team's possession",
  "team_game_possesion",
  "sport_game_possession",
  body,
  "team"
);

export const team_game_possession = getFunc2(
  "home and away team's possession",
  "team_team_game_possession",
  "sport_game_possession",
  body,
  "team",
  "game"
);
