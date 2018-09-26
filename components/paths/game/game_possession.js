import { getFunc } from "../utils/getFn";
import { possession } from "../../definitions/common";

const body = {
  type: "array",
  items: {
    type: "object",
    properties: possession
  }
};

export default getFunc(
  "home and away team's possession",
  "game_game_possesion",
  "sport_game_possession",
  body,
  "game"
);
