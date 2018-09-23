import {getFunc} from "../utils/getFn";
import shot_probability from "../../definitions/shot_probability"

export default getFunc(
  "shot probability",
  "team_shot_probability",
  "shooting_breakdown",
  shot_probability,
  "team",
  ""
);
