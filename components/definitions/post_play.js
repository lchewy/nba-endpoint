const int32 = { type: "integer", format: "int32" };
const float = { type: "number", format: "float" };

export default {
  type: "object",
  properties: {
    post_location_left: int32,
    post_points_per_game_created_left: float,
    post_location_right: int32,
    post_points_per_game_created_right: float,
    post_plays_count: int32,
    card_image: { type: "string" }
  }
};
