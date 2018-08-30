import getFunc from "../utils/getFn";
import post_play from "../../definitions/post_play";

// const body = {
//   type: "object",
//   properties: {
//     post_location_left: {
//       type: "integer",
//       format: "int32"
//     },
//     post_points_per_game_created_left: {
//       type: "number",
//       format: "float"
//     },
//     post_location_right: {
//       type: "integer",
//       format: "int32"
//     },
//     post_points_per_game_created_right: {
//       type: "number",
//       format: "float"
//     },
//     post_plays_count: { type: "integer", format: "int32" },
//     card_image: { type: "string" }
//   }
// };

export default getFunc(
  "post play",
  "team_post_play",
  "post_play",
  post_play,
  "team"
);
