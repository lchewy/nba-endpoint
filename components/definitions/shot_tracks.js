export default {
  type: "array",
  items: {
    type: "object",
    properties: {
      player_ID: { type: "string" },
      on_ball_pct: { type: "number", format: "float" },
      off_ball_pct: { type: "number", format: "float" },
      on_ball: { type: "number", format: "float" },
      off_ball: { type: "number", format: "float" },
      shooting_plays: { type: "integer", format: "int32" },
      graphic_title: { type: "string" },
      game_ID: { type: "string" }
      // card_image: { type: "string" }
    }
  }
};

