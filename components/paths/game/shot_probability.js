import { getFunc } from "../utils/getFn";
import shot_probability from "../../definitions/shot_probability";

export default getFunc(
  "shot probability",
  "game_shot_probability",
  "shot_probability",
  shot_probability,
  "game"
);
