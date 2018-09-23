import {
  most_favorable_stretch,
  least_favorable_stretch
} from "../../definitions/common";
import { getFunc } from "../utils/getFn";

const body = {
  type: "object",
  properties: {
    most_favorable_stretch,
    least_favorable_stretch
  }
};

export default getFunc(
  "team's key stretches",
  "team_key_stretch",
  "key_stretch",
  body,
  "team"
);
