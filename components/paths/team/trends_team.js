import { getFunc } from "../utils/getFn";
// import trends from "../../definitions/trends";
import { trends } from "../../definitions/common";

const body = {
  type: "array",
  items: {
    type: "object",
    properties: trends
  }
};

export default getFunc(
  "trends team",
  "trends_team",
  "trends",
  body,
  "team",
  "Positive and/or negative in game trends for team's players"
);
