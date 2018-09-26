import { getFunc, getFunc2 } from "../utils/getFn";
import { shot_tracks } from "../../definitions/common";

const body = {
  type:"array",
  items:{
    type:"object",
    properties: shot_tracks
  }
}


export const team_shot_tracks_length = getFunc(
  "shot tracks length",
  "team_shot_tracks_length",
  "shot_tracks_length",
  body,
  "team"
);

export const team_game_shot_tracks_length = getFunc2(
  "shot tracks length",
  "team_game_shot_tracks_length",
  "shot_tracks_length",
  body,
  "team",
  "game"
);