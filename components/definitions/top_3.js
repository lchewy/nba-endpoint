const str = { type: "string" };
const int32 = { type: "integer", format: "int32" };

// export default  {
//     type: "array",
//     items: {
//       type: "object",
//       properties: {
//         shot_makers: {
//           type: "object",
//           properties: {
//             points_scored_player_1: str,
//             points_scored_text_player_1: str,
//             points_more_than_expected_player_1: str,
//             points_scored_player_2: str,
//             points_scored_text_player_2: str,
//             points_more_than_expected_player_2: str,
//             points_scored_player_3: str,
//             points_scored_text_player_3: str,
//             points_more_than_expected_player_3: str
//           }
//         },
//         aggregate_name: str,
//         card_sub_type: str,
//         card_image: str
//       }
//     }
//   }

export default {
  // type: "object",
  // properties: {
  //   shot_makers: {
  type: "array",
  items: {
    type: "object",
    properties: {
      aggregate_name: str,
      card_sub_type: str,
      points_scored_player_1: str,
      points_scored_text_player_1: str,
      points_more_than_expected_player_1: str,
      player_ID: str,
      points_scored_player_2: str,
      points_scored_text_player_2: str,
      points_more_than_expected_player_2: str,
      points_scored_player_3: str,
      points_scored_text_player_3: str,
      points_more_than_expected_player_3: str,
      image_id: int32
    }
  }
  //   }
  // }
};
