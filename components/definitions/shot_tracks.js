export default {
  type: "array",
  items: {
    type: "object",
    properties: {
      on_ball_pct: { type: "number", format: "float" },
      off_ball_pct: { type: "number", format: "float" },
      on_ball: { type: "number", format: "float" },
      off_ball: { type: "number", format: "float" },
      shooting_plays: { type: "integer", format: "int32" },
      graphic_title: {type:"string"},
      card_image: { type: "string" }
    }
  }
};
