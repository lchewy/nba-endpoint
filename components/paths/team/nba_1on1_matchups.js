import {getFunc} from "../utils/getFn";
import nba_1on1_matchups from "../../definitions/nba_1on1_matchups";

export default getFunc(
  "team 1 on 1 matchups",
  "team_nba_1on1_matchups",
  "1_on_1_matchups",
  nba_1on1_matchups,
  "team",
  "1 on 1 matchup comparisons"
);
