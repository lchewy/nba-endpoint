import { getFunc, getFunc2 } from "../utils/getFn";
// import shot_tracks from "../../definitions/shot_tracks";
import { shot_tracks, str } from "../../definitions/common";
// import shot_tracks_time from "../team/shot_tracks_time";

import shot_track_chart from "../../definitions/shot_tracks_chart";

const shot_tracks_length = {
  type: "array",
  items: {
    type: "object",
    properties: shot_tracks
  }
};

const shot_tracks_time = {
  type: "array",
  items: {
    type: "object",
    properties: {
      ...shot_tracks,
      player_ID: str,
      graphic_title: str,
      game_ID: str,
      date: str,
      date_string: str
    }
  }
};

const shot_tracks_player = {
  type: "array",
  items: shot_track_chart
};

export const playerShotTracksLength = getFunc(
  "shot tracks length",
  "player_shot_tracks_length",
  "shot_tracks_length",
  shot_tracks_length,
  "player"
);

export const playerGameShotTracksLength = getFunc2(
  "shot tracks length",
  "player_game_shot_tracks_length",
  "shot_tracks_length",
  shot_tracks_length,
  "player",
  "game"
);

export const playerShotTracksTime = getFunc(
  "shot tracks time",
  "player_shot_tracks_time",
  "shot_tracks_time",
  shot_tracks_time,
  "player"
);

export const playerGameShotTracksTime = getFunc2(
  "shot tracks time",
  "player_game_shot_tracks_time",
  "shot_tracks_time",
  shot_tracks_time,
  "player",
  "game"
);

export const shotTracksPlayers = getFunc(
  "shot tracks",
  "shot_tracks_player",
  "shot_tracks",
  shot_tracks_player,
  "player"
);

export const shotTracksPlayerGame = getFunc2(
  "shot tracks",
  "shot_tracks_player_game",
  "shot_tracks",
  shot_tracks_player,
  "player",
  "game"
);
