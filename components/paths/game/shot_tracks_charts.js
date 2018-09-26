import { getFunc } from "../utils/getFn";
import {
  shot_tracks_chart,
  shot_tracks_chart_sub
} from "../../definitions/common";

const body = {
  type: "array",
  items: {
    type: "object",
    properties: { ...shot_tracks_chart, x_y_coords: shot_tracks_chart_sub }
  }
};

const halfcourt_2pt_body = {
  type: "object",
  properties: {
    halfcourt_2pt: body
  }
};

const halfcourt_3pt_body = {
  type: "object",
  properties: {
    halfcourt_3pt: body
  }
};

const late_clock_body = {
  type: "object",
  properties: {
    late_clock: body
  }
};

const sprint_offense_body = {
  type: "object",
  properties: {
    sprint_offense: body
  }
};

const shot_tracks_body = {
    type:'object',
    properties:{
        shot_tracks: body
    }
}

export const halfcourt_2pt = getFunc(
  "teams shot tracks chart for 2 points at halfcourt",
  "game_shot_tracks_charts_halfcourt_2pts",
  "halfcourt_2pt",
  halfcourt_2pt_body,
  "game"
);

export const halfcourt_3pt = getFunc(
  "teams shot tracks chart for 3 points at halfcourt",
  "game_shot_tracks_charts_halfcourt_3pts",
  "halfcourt_3pt",
  halfcourt_3pt_body,
  "game"
);

export const late_clock = getFunc(
  "teams late clock shots",
  "game_shot_tracks_charts_late_clock",
  "late_clock",
  late_clock_body,
  "game"
);

export const sprint_offense = getFunc(
  "teams sprint offese",
  "game_shot_tracks_chart_sprint_offense",
  "sprint_offense",
  sprint_offense_body,
  "game"
);

export const shot_tracks = getFunc(
    "teams shot tracks",
    "game_shot_tracks_charts_shot_tracks",
    "shot_tracks",
    shot_tracks_body,
    "game"
)