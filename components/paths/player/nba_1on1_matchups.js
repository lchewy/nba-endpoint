import {getFunc} from "../utils/getFn";
import nba_1on1_matchups from "../../definitions/nba_1on1_matchups";

export const player_game_1on1_matchups = getFunc(
  "player 1 on 1 matchups",
  "player_game_nba_1on1_matchups",
  "1_on_1_matchups",
  nba_1on1_matchups,
  "player",
  "1 on 1 matchup comparisons"
);

export const player_1on1_matchups = getFunc(
  "player 1 on 1 matchups",
  "player_nba_1on1_matchups",
  "1_on_1_matchups",
  nba_1on1_matchups,
  "player",
  "1 on 1 matchup comparisons"
);
