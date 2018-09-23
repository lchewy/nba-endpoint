import {getFunc} from "../utils/getFn";
import bottom_3_players from "../../definitions/top_3";

const body = {
  type:"object",
  properties: {
    bottom_shot_makers: bottom_3_players
  }
}

export default getFunc(
  "bottom 3 players",
  "team_bottom_3_players",
  "shot_taking_making",
  body,
  "team",
  "Bottom 3 shot makers"
);
