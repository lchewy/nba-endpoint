import {getFunc} from "../utils/getFn";
import shot_tracks from "../../definitions/shot_tracks";

export const shotTracksLength = getFunc(
  "shot tracks length",
  "shot_tracks_length_player",
  "shot_tracks_length",
  shot_tracks,
  "player"
);

export const shotTracksTime = getFunc(
  "shot tracks time",
  "shot_tracks_time_player",
  "shot_tracks_time",
  shot_tracks,
  "player"
);
