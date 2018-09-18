import { getFunc } from "../utils/getFn";
import { shot_tracks_chart } from "../../definitions/common";

const shot_tracks_charts = {
  type: "object",
  properties: shot_tracks_chart
};

const body = {
  type: "object",
  properties: {
    sprint_offense: {
      type: "array",
      items: shot_tracks_charts
    },
    late_clock: {
      type: "array",
      items: shot_tracks_charts
    },
    halfcourt_3pt: {
      type: "array",
      items: shot_tracks_charts
    },
    halfcourt_2pt: {
      type: "array",
      items: shot_tracks_charts
    },
    shot_tracks: {
      type: "array",
      items: shot_tracks_charts
    }
  }
};

export default getFunc(
  "shot tracks chart",
  "game_shot_tracks_chart",
  "shot_tracks_chart",
  body,
  "game"
);