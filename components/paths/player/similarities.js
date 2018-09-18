import {getFunc} from "../utils/getFn";
// import similarities from "../../definitions/similarities";
import {similarities} from "../../definitions/common";

const body = {
  type:"object",
  properties: similarities
}


export default getFunc(
  "similarities",
  "player_similarities",
  "skill",
  body,
  "player"
);
