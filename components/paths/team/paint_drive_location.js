import getFunc from "../utils/getFn";

const body = {
  type: "object",
  properties: {
    paint_drive_location_left: {
      type: "integer",
      format: "int32"
    },
    per_game_created_left: {
      type: "number",
      format: "float"
    },
    paint_drive_location_right: {
      type: "integer",
      format: "int32"
    },
    points_per_game_created_right: {
      type: "number",
      format: "float"
    },
    total_paint_drives: {
      type: "integer",
      format: "int32"
    },
    card_image: { type: "string" }
  }
};

export default getFunc(
  "paint drive location",
  "paint_drive_location",
  "paint_drive_location",
  body,
  "team"
);
