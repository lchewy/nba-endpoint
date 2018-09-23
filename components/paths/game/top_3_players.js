import {getFunc} from "../utils/getFn";
import top_3_players from "../../definitions/top_3";

const body = {
  type:"object",
  properties: {
    top_shot_makers: top_3_players
  }
}

export default getFunc(
  "top 3 players",
  "game_top_3_players",
  "shot_taking_making",
  body,
  "game",
  "top 3 shot makers"
);
