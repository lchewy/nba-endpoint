import { getFunc } from "../utils/getFn";
import shot_tracks_chart from "../../definitions/shot_tracks_chart";

const body = {
  type: "object",
  properties: {
    sprint_offense: {
      type: "array",
      items: shot_tracks_chart
    },
    late_clock: {
      type: "array",
      items: shot_tracks_chart
    },
    halfcourt_3pt: {
      type: "array",
      items: shot_tracks_chart
    },
    halfcourt_2pt: {
      type: "array",
      items: shot_tracks_chart
    },
    shot_tracks: {
      type: "array",
      items: shot_tracks_chart
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
