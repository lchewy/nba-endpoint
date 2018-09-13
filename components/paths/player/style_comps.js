import {getFunc} from "../utils/getFn";
// import style from "../../definitions/style";
import {style_comps} from "../../definitions/common";

const body = {
  type:"object",
  properties: style_comps
}

export default getFunc(
  "Style Comps",
  "player_style_comps",
  "style",
  body,
  "player"
);
