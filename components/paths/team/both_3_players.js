import {getFunc} from "../utils/getFn";
import both_3_players from "../../definitions/top_3";

const body = {
  type:"object",
  properties: {
    shot_takers: both_3_players
  }
}

export default getFunc(
  "Shots taken by key shooters",
  "team_both_3_players",
  "shot_taking_making",
  body,
  "team"
);
