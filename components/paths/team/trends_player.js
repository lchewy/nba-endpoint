import { getFunc } from "../utils/getFn";
// import trends from "../../definitions/trends";
import { trends } from "../../definitions/common";

const trends_player = {
  player_ID: {type:"string"},
  ...trends,
}

const body = {
  type: "array",
  items: {
    type: "object",
    properties: trends_player
  }
};
export default getFunc(
  "trends player",
  "trends_player",
  "trends_player",
  body,
  "team",
  "collection of players positive and/or negative in game trends on a team"
);
