import getFunc from "../utils/getFn";
import nba_seasonal_matchup_easiest from "../../definitions/nba_seasonal_matchup_easiest";

export default getFunc(
  "nba seasonal matchup easiest",
  "nba_seasonal_matchup_easiest_player",
  "nba_seasonal_matchup_easiest",
  nba_seasonal_matchup_easiest,
  "player",
  "Three most favorable matchup for a team's player against players from another team"
);
