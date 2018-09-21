import { getFunc2 } from "../utils/getFn";
import {
  shot_tracks_chart,
  shot_tracks_chart_sub
} from "../../definitions/common";

const body = {
  type: "object",
  properties: {
    late_clock: {
      type: "array",
      items: {
        type: "object",
        properties: { ...shot_tracks_chart, shot_tracks: shot_tracks_chart_sub }
      }
    }
  }
};

export default getFunc2(
  "teams shot tracks locations",
  "team_game_shot_tracks_shot_tracks",
  "shot_track_chart",
  body,
  "team",
  "game"
);
