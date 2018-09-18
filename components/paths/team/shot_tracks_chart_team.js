import { getFunc } from "../utils/getFn";
// import shot_tracks_chart from "../../definitions/shot_tracks_chart";
import { shot_tracks_chart } from "../../definitions/common";

const shot_tracks_chart_with_id = {
  type: "object",
  properties: {
    player_ID: { type: "string" },
    ...shot_tracks_chart
  }
};

const body = {
  type: "object",
  properties: {
    sprint_offense: {
      type: "array",
      items: shot_tracks_chart_with_id
    },
    late_clock: {
      type: "array",
      items: shot_tracks_chart_with_id
    },
    halfcourt_3pt: {
      type: "array",
      items: shot_tracks_chart_with_id
    },
    halfcourt_2pt: {
      type: "array",
      items: shot_tracks_chart_with_id
    },
    shot_tracks: {
      type: "array",
      items: shot_tracks_chart_with_id
    }
  }
};

export default getFunc(
  "teams shot tracks chart",
  "shot_tracks_chart_team",
  "shot_tracks_chart",
  body,
  "team"
);
