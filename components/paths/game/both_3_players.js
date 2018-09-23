import {getFunc} from "../utils/getFn";
import both_3_players from "../../definitions/top_3";

const body = {
  type:"object",
  properties: {
    shot_takers: both_3_players
  }
}

export default getFunc(
  "both 3 players",
  "game_both_3_players",
  "shot_taking_making",
  body,
  "game",
  "both 3 shot makers"
);
