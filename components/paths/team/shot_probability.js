import {getFunc} from "../utils/getFn";

const float = { type: "number", format: "float" };
const int32 = { type: "integer", format: "int32" };
const str = { type: "string" };

const body = {
  type: "array",
  items: {
    type: "object",
    properties: {
      two_pts_expected_value: float,
      two_pts_attempted: int32,
      two_pts_made: int32,
      three_pts_expected_value: float,
      three_pts_attempted: int32,
      three_pts_made: int32,
      free_throws_expected_value: float,
      free_throws_attempted: int32,
      free_throws_made: int32,
      text_description: str,
      text_visualization: str
    }
  }
};

export default getFunc(
  "shot probability",
  "team_shot_probability",
  "shot_probability",
  body,
  "team",
  ""
);
