// import shot_tracks from "../../definitions/shot_tracks";
import { getFunc } from "../utils/getFn";
import { shot_tracks } from "../../definitions/common";

const shot_tracks_time = {
  ...shot_tracks,
  player_ID: { type: "string" },
  graphic_title: { type: "string" },
  game_ID: { type: "string" }
};

const body = {
  type: "array",
  items: { type: "object", properties: shot_tracks_time }
};

export default getFunc(
  "shot tracks time",
  "shot_tracks_time",
  "shot_tracks_time",
  body,
  "team"
);
