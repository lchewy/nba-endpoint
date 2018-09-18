// import shot_tracks from "../../definitions/shot_tracks";
import { getFunc } from "../utils/getFn";
import { shot_tracks } from "../../definitions/common";

// const shot_tracks_length = { ...shot_tracks, card_image: { type: "string" } };

const body = {
  type:"array",
  items:{
    type:"object",
    properties: shot_tracks
  }
}


export default getFunc(
  "shot tracks length",
  "shot_tracks_length",
  "shot_tracks_length",
  body,
  "team"
);
