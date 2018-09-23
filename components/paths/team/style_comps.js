import {getFunc} from "../utils/getFn";
// import style from "../../definitions/style";
import {style_comps } from "../../definitions/common";

const body = {
  type:"array",
  items:{
    type:"object",
    properties: style_comps
  }
}

export default getFunc(
  "Style Comps",
  "team_style_comps",
  "style_similarity",
  body,
  "team"
);
