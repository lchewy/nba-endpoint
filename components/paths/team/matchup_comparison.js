import getFunc from "../utils/getFn";
import matchup_comparison from "../../definitions/matchup_comparison";

export default getFunc(
  "matchup comparison",
  "matchup_comparison",
  "nba_matchup_choice",
  matchup_comparison,
  "team",
  "matchup comparison between a team's player vs opponents"
);
