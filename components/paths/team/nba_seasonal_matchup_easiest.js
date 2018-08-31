import getFunc from "../utils/getFn";
import nba_seasonal_matchup_easiest from "../../definitions/nba_seasonal_matchup_easiest";

// const str = { type: "string" };

// const body = {
//   type: "object",
//   properties: {
//     easiest_matchup_offense_1: str,
//     easiest_matchup_offense_2: str,
//     easiest_matchup_offense_3: str,
//     card_image: str
//   }
// };

export default getFunc(
  "nba seasonal matchup easiest",
  "nba_seasonal_matchup_easiest",
  "nba_seasonal_matchup_easiest",
  nba_seasonal_matchup_easiest,
  "team"
);
