import { getFunc, getFunc2 } from "../utils/getFn";
import { shot_tracks, str } from "../../definitions/common";

const shot_tracks_time = {
  ...shot_tracks,
  player_ID: { type: "string" },
  graphic_title: { type: "string" },
  game_ID: { type: "string" },
  date: str,
  date_string: str
};

const body = {
  type: "array",
  items: { type: "object", properties: shot_tracks_time }
};

export const team_shot_tracks_time = getFunc(
  "shot tracks time",
  "team_shot_tracks_time",
  "shot_tracks_time",
  body,
  "team"
);

export const team_game_shot_tracks_time = getFunc2(
  "shot tracks time",
  "team_game_shot_tracks_time",
  "shot_tracks_time",
  body,
  "team",
  "game"
);
