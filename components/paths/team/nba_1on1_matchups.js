import getFunc from "../utils/getFn";
const str = { type: "string" };
const int32 = { type: "integer", format: "int32" };

const body = {
  type: "array",
  items: {
    type: "object",
    properties: {
      game_ID: str,
      total_possessions: int32,
      text_description: str,
      FGA: str,
      FGM: str,
      turnovers: str,
      pts_scored: str,
      rating: str,
      fense: str
    }
  }
};

export default getFunc(
  "team 1 on 1 matchups",
  "team_nba_1on1_matchups",
  "nba_1on1_matchups",
  body,
  "team",
  "1 on 1 matchup comparisons"
);
