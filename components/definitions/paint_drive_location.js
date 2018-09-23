const int32 = {
  type: "integer",
  format: "int32"
};

const float = {
  type: "number",
  format: "float"
};

const str = {
  type: "string"
};

export default {
  type: "array",
  items: {
    type: "object",
    properties: {
      player_ID: { type: "string" },
      graphic_title: { type: "string" },
      paint_drive_location_left: int32,
      per_game_created_left: float,
      paint_drive_location_right: int32,
      points_per_game_created_right: float,
      total_paint_drives: int32,
      image_id: int32,
      date: str,
      date_string: str
      // card_image: { type: "string" }
    }
  }
};
