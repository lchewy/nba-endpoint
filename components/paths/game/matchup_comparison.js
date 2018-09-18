import {getFunc} from "../utils/getFn";
import matchup_comparison from "../../definitions/matchup_comparison";

export default getFunc(
  "game matchup comparison",
  "game_matchup_comparison",
  "matchup_comparison",
  matchup_comparison,
  "game",
  "matchup comparison between a team's player vs opponents"
);
