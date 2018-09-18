import {getFunc} from "../utils/getFn";
// import similarities from "../../definitions/similarities";
import {similarities} from "../../definitions/common";

const body = {
  type:"array",
  items:{
    type:"object",
    properties: similarities
  }
}


export default getFunc(
  "similarities",
  "team_similarities",
  "skill",
  body,
  "team"
);
