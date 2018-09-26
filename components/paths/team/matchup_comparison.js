import { getFunc, getFunc2 } from "../utils/getFn";
import matchup_comparison from "../../definitions/matchup_comparison";

export const team_matchup_comparison = getFunc(
  "matchup comparison",
  "team_matchup_comparison",
  "matchup_comparison",
  matchup_comparison,
  "team",
  "matchup comparison between a team's player vs opponents"
);

export const team_game_matchup_comparison = getFunc2(
  "matchup comparison",
  "team_game_matchup_comparison",
  "matchup_comparison",
  matchup_comparison,
  "team",
  "game",
  "matchup comparison between a team's player vs opponents"
);
