import { getFunc2 } from "../utils/getFn";

const float = { type: "number", format: "float" };
const int32 = { type: "integer", format: "int32" };
const str = { type: "string" };

const body = {
  type: "array",
  items: {
    type: "object",
    properties: {
      game_ID: str,
      two_points_expected_value: float,
      two_points_att: int32,
      two_points_made: int32,
      three_points_expected_value: float,
      three_points_att: int32,
      three_points_made: int32,
      free_throws_expected_value: float,
      free_throws_att: int32,
      free_throws_made: int32,
      text_description: str,
      text_visualization: str,
      image_id: int32,
      date: str,
      date_string: str
    }
  }
};

export default getFunc2(
  "a teams shot probability for a game",
  "team_game_shot_probability",
  "shot_probability",
  body,
  "team",
  "game"
);