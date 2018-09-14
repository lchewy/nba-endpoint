const str = { type: "string" };

export default {
  type: "array",
  items: {
    type: "object",
    properties: {
      player_ID: {
        type: "array",
        items: str
      },
      display_text: str,
      rating: {type:"integer", format:"int32"},
      chemistry_level: str,
      best_play_1: str,
      best_play_2: str,
      best_play_3: str,
      image_id: { type: "integer", format: "int32" }
      // card_image: str
    }
  }
};
