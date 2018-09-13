import {getFunc} from "../utils/getFn";
// import shot_tracks from "../../definitions/shot_tracks";
import {shot_tracks, str} from "../../definitions/common";
// import shot_tracks_time from "../team/shot_tracks_time";

const shot_tracks_length = {
  type:"array",
  items:{
    type:"object",
    properties:{
      ...shot_tracks,
      card_image: str
    }
  }
}

const shot_tracks_time = {
  type:"array",
  items:{
    type:"object",
    properties:{
      ...shot_tracks,
      player_ID: str,
      graphic_title: str,
      game_ID: str
    }
  }
}


export const shotTracksLength = getFunc(
  "shot tracks length",
  "shot_tracks_length_player",
  "shot_tracks_length",
  shot_tracks_length,
  "player"
);

export const shotTracksTime = getFunc(
  "shot tracks time",
  "shot_tracks_time_player",
  "shot_tracks_time",
  shot_tracks_time,
  "player"
);
