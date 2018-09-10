import {getFunc} from "../utils/getFn";
import trends from "../../definitions/trends";

export default getFunc(
  "trends player",
  "trends_player",
  "trends",
  trends,
  "team",
  "collection of players positive and/or negative in game trends on a team"
);
