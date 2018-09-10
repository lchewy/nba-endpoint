import {getFunc} from "../utils/getFn";

const int32 = { type: "integer", format: "int32" };

const body = {
  type: "array",
  items: {
    type: "object",
    properties: {
      off_screen_defense: int32,
      rim_protection: int32,
      "1_on_1_defense": int32,
      perimeter_shot_contesting: int32,
      ball_screen_handler_defense: int32,
      post_defense: int32,
      ball_screener_defense: int32,
      closeouts: int32,
      defending_drives: int32,
      help_rotations: int32,
      steals: int32,
      defensive_boards: int32,
      wing_game: int32,
      shooting: int32,
      scoring: int32,
      post_playmaking: int32,
      transition_game: int32,
      passing: int32,
      screen_setting_game: int32,
      handling: int32,
      finish_at_rim: int32,
      "1_on_1_offense": int32,
      attacking: int32,
      offensive_boards_putbacks: int32
    }
  }
};

export default getFunc(
  "offensive rating",
  "offensive_rating",
  "Skills",
  body,
  "team"
);
