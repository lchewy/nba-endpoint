import { three_matchups } from "../../definitions/common";
import { getFunc } from "../utils/getFn";

const body = {
  type: "object",
  properties: {
    most_favorable_matchup_offense: {
      type: "array",
      items: three_matchups
    },
    least_favorable_matchup_offense: {
      type: "array",
      items: three_matchups
    },
    most_favorable_matchup_defense: {
      type: "array",
      items: three_matchups
    },
    least_favorable_matchup_defense: {
      type: "array",
      items: three_matchups
    }
  }
};

export default getFunc(
  "a teams's matchups",
  "team_three_matchup",
  "three_matchups",
  body,
  "team"
);
