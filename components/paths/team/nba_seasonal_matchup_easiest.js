import getFunc from "../utils/getFn";

const str = { type: "string" };

const body = {
  type: "object",
  properties: {
    nba_seasonal_matchup_easiest: str,
    easiest_matchup_offense_2: str,
    easiest_matchup_offense_3: str,
    card_image: str
  }
};

export default getFunc(
  "nba seasonal matchup easiest",
  "nba_seasonal_matchup_easiest",
  "nba_seasonal_matchup_easiest",
  body,
  "team"
);
