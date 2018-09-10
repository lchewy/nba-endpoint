import {getFunc} from "../utils/getFn";
import nba_1on1_matchups from "../../definitions/nba_1on1_matchups";

export default getFunc(
  "player 1 on 1 matchups",
  "player_nba_1on1_matchups",
  "nba_1on1_matchups",
  nba_1on1_matchups,
  "player",
  "1 on 1 matchup comparisons"
);
