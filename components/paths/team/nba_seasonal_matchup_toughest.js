import getFunc from "../utils/getFn";
const str = { type: "string" };

const body = {
  type: "object",
  properties: {
    toughest_matchup_offense_1: str,
    toughest_matchup_offense_2: str,
    toughest_matchup_offense_3: str,
    card_image: str
  }
};

export default getFunc(
  "nba seasonal matchup toughest",
  "nba_seasonal_matchup_toughest",
  "nba_seasonal_matchup_toughest",
  body,
  "team"
);
