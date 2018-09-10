import {getFunc} from "../utils/getFn";
import matchup_comparison from "../../definitions/matchup_comparison";

export default getFunc(
  "matchup comparison",
  "matchup_comparison_player",
  "matchup_comparison",
  matchup_comparison,
  "player",
  "matchup comparison between a team's player vs opponents"
);
