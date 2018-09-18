import {getFunc} from "../utils/getFn";
import top_3_players from "../../definitions/top_3";

export default getFunc(
  "top 3 players",
  "game_top_3_players",
  "shot_makers",
  top_3_players,
  "game",
  "top 3 shot makers"
);
