import {getFunc} from "../utils/getFn";
// import trends from "../../definitions/trends";
import {trends} from "../../definitions/common";

const body = {
  type:"object",
  properties: trends
}


export default getFunc(
  "trends player",
  "trends_player_player",
  "trends",
  body,
  "player",
  "A player's positive and/or negative in game trends"
);
