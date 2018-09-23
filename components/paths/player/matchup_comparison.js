import {getFunc} from "../utils/getFn";
import matchup_comparison from "../../definitions/matchup_comparison";

export const player_matchup_comparison =  getFunc(
  "matchup comparison",
  "player_matchup_comparison",
  "matchup_comparison",
  matchup_comparison,
  "player",
  "matchup comparison between a team's player vs opponents"
);


export const player_game_matchup_comparison =  getFunc(
  "matchup comparison",
  "player_game_matchup_comparison",
  "matchup_comparison",
  matchup_comparison,
  "player",
  "matchup comparison between a team's player vs opponents"
);
