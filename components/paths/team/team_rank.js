import {getFunc} from "../utils/getFn";

const float = { type: "number", format: "float" };

const body = {
  type: "array",
  items: {
    type: "object",
    properties: {
      text: { type: "string" },
      expected_points_per_shot: float,
      points_per_game: float,
      "possession_duration_(time_remaining)": float,
      points_per_possession: float
    }
  }
};

export default getFunc("team rank", "team_rank", "team_rank", body, "team");
