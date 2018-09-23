const int32 = { type: "integer", format: "int32" };
const str = { type: "string" };

export default {
  type: "array",
  items: {
    type: "object",
    properties: {
      defender_1_ID: str,
      defender_1_name: str,
      defender_1_offensive_rating: int32,
      defender_1_possessions: int32,
      defender_2_ID: str,
      defender_2_name: str,
      defender_2_offensive_rating: int32,
      defender_2_possessions: int32,
      total_possessions: int32,
      efficiency: str,
      text_description: str,
      graphic_title: str,
      game_ID: str,
      image_id: int32,
      date: str,
      date_string: str
    }
  }
};
