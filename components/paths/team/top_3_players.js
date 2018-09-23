import {getFunc} from "../utils/getFn";
import top_3_players from "../../definitions/top_3";

const body = {
  type:"object",
  properties: {
    top_shot_makers: top_3_players
  }
}

export default getFunc(
  "top shot makers",
  "team_top_3_shot_makers",
  "shot_taking_making",
  body,
  "team",
  "top 3 shot makers"
);
