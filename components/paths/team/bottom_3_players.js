import { getFunc, getFunc2 } from "../utils/getFn";
import bottom_3_players from "../../definitions/top_3";

const body = {
  type: "object",
  properties: {
    bottom_shot_makers: bottom_3_players
  }
};

export const team_bottom_shot_makers = getFunc(
  "bottom 3 players",
  "team_bottom_shot_makers",
  "shot_taking_making",
  body,
  "team",
  "Bottom 3 shot makers"
);

export const team_game_bottom_shot_makers = getFunc2(
  "bottom 3 players",
  "team_game_bottom_shot_makers",
  "shot_taking_making",
  body,
  "team",
  "game",
  "Bottom 3 shot makers"
);
