const str = { type: "string" };
const int32 = { type: "integer", format: "int32" };

export default {
  type: "array",
  items: {
    type: "object",
    properties: {
      player_ID: str,
      game_ID: str,
      total_possessions: int32,
      text_description: str,
      field_goals_att: str,
      field_goals_made: str,
      turnovers: str,
      points: str,
      rating: str,
      fense: str,
      image_id: int32,
      date: str,
      date_string: str
    }
  }
};