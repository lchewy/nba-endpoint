const str = { type: "string" };
const int32 = { type: "integer", format: "int32" };

export default {
  type: "array",
  items: {
    type: "object",
    properties: {
      aggregate_name: str,
      card_sub_type: str,
      player_1: str,
      player_1_id: str,
      player_1_points_scored: str,
      player_1_expected_points: str,
      player_1_player_stat: int32,
      player_1_player_stat_string: str,
      player_2: str,
      player_2_id: str,
      player_2_points_scored: str,
      player_2_expected_points: str,
      player_2_player_stat: int32,
      player_2_player_stat_string: str,
      player_3: str,
      player_3_id: str,
      player_3_points_scored: str,
      player_3_expected_points: str,
      player_3_player_stat: int32,
      player_3_player_stat_string: str,
      image_id: int32,
      date: str,
      date_string: str
    }
  }
};
