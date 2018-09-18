import {getFunc} from "../utils/getFn";
import nba_1on1_matchups from "../../definitions/nba_1on1_matchups";

export default getFunc(
  "game 1 on 1 matchups",
  "game_nba_1on1_matchups",
  "nba_1on1_matchups",
  nba_1on1_matchups,
  "game",
  "1 on 1 matchup comparisons"
);
