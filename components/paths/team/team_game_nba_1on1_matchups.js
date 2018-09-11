import { getFunc2 } from "../utils/getFn";
import nba_1on1_matchups from "../../definitions/nba_1on1_matchups";

export default getFunc2(
  "insights on 1 on 1 matchups within a game",
  "team_game_nba_1on1_matchups",
  "nba_1on1_matchups",
  nba_1on1_matchups,
  "team",
  "game"
);
