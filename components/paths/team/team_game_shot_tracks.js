import { getFunc2 } from "../utils/getFn";
import { shot_tracks_chart } from "../../definitions/common";

const halfcourt_2pt = {
  type: "array",
  items: { type: "object", properties: shot_tracks_chart }
};

const halfcourt_3pt = {
  type: "array",
  items: { type: "object", properties: shot_tracks_chart }
};

const late_clock = {
  type: "array",
  items: { type: "object", properties: shot_tracks_chart }
};

const sprint_offense = {
  type: "array",
  items: { type: "object", properties: shot_tracks_chart }
};

const shot_tracks = {
  type: "array",
  items: { type: "object", properties: shot_tracks_chart }
};

const body = {
  type: "object",
  properties: {
    halfcourt_2pt,
    halfcourt_3pt,
    late_clock,
    sprint_offense,
    shot_tracks
  }
};

export default getFunc2(
  "team's shot tracks from game",
  "team_game_shot_tracks",
  "shot_tracks_chart",
  body,
  "team",
  "game"
);
