import { getFunc } from "../utils/getFn";
// import trends from "../../definitions/trends";
import { trends, str } from "../../definitions/common";

const trends_player = { player_ID: str, ...trends };

const body = {
  type: "object",
  properties: trends_player
};

export default getFunc(
  "trends player",
  "trends_player_player",
  "trends_player",
  body,
  "player",
  "A player's positive and/or negative in game trends"
);
