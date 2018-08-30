import getFunc from "../utils/getFn";

const int32 = { type: "integer", format: "int32" };
const str = { type: "string" };

const body = {
  type: "object",
  properties: {
    player_1_offensive_rating: int32,
    player_1_possessions: str,
    player_2_offensive_rating: int32,
    player_2_possessions: str,
    total_possessions: int32,
    total_possessions: str,
    total_possessions: str,
    total_possessions: str
  }
};

export default getFunc(
  "matchup comparison",
  "matchup_comparison",
  "matchup_comparison",
  body,
  "team"
);
