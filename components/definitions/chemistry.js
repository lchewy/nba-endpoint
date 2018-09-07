const str = { type: "string" };

export default {
  type: "array",
  items: {
    type: "object",
    properties: {
      display_text: str,
      best_play_1: str,
      best_play_2: str,
      best_play_3: str,
      card_image: str
    }
  }
};
