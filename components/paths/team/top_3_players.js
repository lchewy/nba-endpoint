import {getFunc} from "../utils/getFn";
import top_3_players from "../../definitions/top_3";

export default getFunc(
  "top 3 players",
  "team_top_3_players",
  "shot_makers",
  top_3_players,
  "team",
  "top 3 shot makers"
);
