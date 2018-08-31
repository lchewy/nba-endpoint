import getFunc from "../utils/getFn";

const int32 = { type: "integer", format: "int32" };
const body = {
  type: "object",
  properties: {
    help_rotations: int32,
    closeouts: int32,
    "1_on_1_defense": int32,
    perimeter_shot_contesting: int32,
    off_screen_defense: int32,
    post_defense: int32,
    defending_drives: int32,
    ball_screen_handler_defense: int32,
    steals: int32,
    ball_screener_defense: int32,
    defensive_boards: int32,
    rim_protection: int32
  }
};

export default getFunc(
  "offensive rating",
  "offensive_rating",
  "offensive_rating",
  body,
  "player"
);
