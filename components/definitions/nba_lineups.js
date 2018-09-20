const str = { type: "string" };
const float = { type: "number", format: "float" };

export default {
  type: "array",
  items: {
    type: "object",
    properties: {
      graphic_title: str,
      game_ID: str,
      player_ID: str,
      player_1_name: str,
      player_1_position: str,
      player_2_name: str,
      player_2_position: str,
      player_3_name: str,
      player_3_position: str,
      player_4_name: str,
      player_4_position: str,
      player_5_name: str,
      player_5_position: str,
      lineup_plus_minus: str,
      lineup_time: str,
      lineup_eFG_pct: str,
      lineup_eFG_pct_allowed: str,
      time_left_on_shot_clock: float,
      team_eFG_pct: str,
      team_eFG_pct_allowed: str,
      team_time_left_on_shot_clock: float,
      image_id: { type: "integer", format: "int32" },
      date: str,
      date_string: str
    }
  }
};
