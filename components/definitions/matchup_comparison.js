const int32 = { type: "integer", format: "int32" };
const str = { type: "string" };

export default {
  type: "array",
  items: {
    type: "object",
    properties: {
      player_1_offensive_rating: int32,
      player_1_possessions: str,
      player_2_offensive_rating: int32,
      player_2_possessions: str,
      total_possessions: int32,
      efficiency: str,
      text_description: str,
      graphic_title: str,
      game_ID: str,
      image_id: int32
      // card_image: str
    }
  }
};
