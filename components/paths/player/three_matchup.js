import { three_matchups } from "../../definitions/common";
import { getFunc } from "../utils/getFn";



const body = {
    type: "object",
    properties: {
    most_favorable_matchup_offense: three_matchups,
    least_favorable_matchup_offense: three_matchups,
    most_favorable_matchup_defense: three_matchups,
    least_favorable_matchup_defense: three_matchups
  }
};

export default getFunc(
  "a player's matchups",
  "player_three_matchup",
  "three_matchups",
  body,
  "player"
);
