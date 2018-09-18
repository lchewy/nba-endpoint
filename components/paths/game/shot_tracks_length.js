import { getFunc } from "../utils/getFn";
import { shot_tracks } from "../../definitions/common";

const body = {
  type:"array",
  items:{
    type:"object",
    properties: shot_tracks
  }
}


export default getFunc(
  "shot tracks length",
  "game_shot_tracks_length",
  "shot_tracks_length",
  body,
  "game"
);
