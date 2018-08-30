import getFunc from "../utils/getFn";

const str = { type: "string" };

const body = {
  type: "object",
  properties: {
    best_play_1: str,
    best_play_2: str,
    best_play_3: str,
    card_image: str
  }
};

export default getFunc("chemistry", "chemistry", "chemistry", body, "team");
