import {getFunc} from "../utils/getFn";
import shot_tracks_chart from "../../definitions/shot_tracks_chart";

export const shot_tracks_chart_2pt = getFunc(
  "shot tracks chart 2pt",
  "shot_tracks_chart_2pt",
  "shot_tracks_chart_halfcourt_2pt",
  shot_tracks_chart,
  "team"
);

export const shot_tracks_chart_3pt = getFunc(
  "shot tracks chart 3pt",
  "shot_tracks_chart_3pt",
  "shot_tracks_chart_halfcourt_3pt",
  shot_tracks_chart,
  "team"
);

export const shot_tracks_chart_early_o = getFunc(
  "shot tracks chart sprint offense",
  "shot_tracks_chart_sprint_offense",
  "shot_tracks_chart_sprint_offense",
  shot_tracks_chart,
  "team"
);

export const shot_tracks_chart_late_clock = getFunc(
  "shot tracks chart late clock",
  "shot_tracks_chart_late_clock",
  "shot_tracks_chart_late_clock",
  shot_tracks_chart,
  "team"
);
