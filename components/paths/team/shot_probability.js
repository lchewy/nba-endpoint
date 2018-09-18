import {getFunc} from "../utils/getFn";
import shot_probability from "../../definitions/shot_probability"

// const float = { type: "number", format: "float" };
// const int32 = { type: "integer", format: "int32" };
// const str = { type: "string" };

// const body = {
//   type: "array",
//   items: {
//     type: "object",
//     properties: {
//       game_ID: str,

//       two_pts_expected_value: float,
//       two_points_att: int32,
//       two_pts_made: int32,
//       three_pts_expected_value: float,
//       three_points_att: int32,
//       three_pts_made: int32,
//       free_throws_expected_value: float,
//       free_throws_att: int32,
//       free_throws_made: int32,
//       text_description: str,
//       text_visualization: str,
//       image_id: int32
//     }
//   }
// };

export default getFunc(
  "shot probability",
  "team_shot_probability",
  "shot_probability",
  shot_probability,
  "team",
  ""
);
