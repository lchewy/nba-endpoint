import { getFunc2 } from "../utils/getFn";
import {
  shot_tracks_chart,
  shot_tracks_chart_sub
} from "../../definitions/common";

const body = {
  type: "object",
  properties: { 
    sprint_offense:{
      type:"array",
      items: {
        type:"object",
        properties: {...shot_tracks_chart, shot_tracks: shot_tracks_chart_sub }
      }
    }
  }
};

export default getFunc2(
  "a teams sprint_offense",
  "team_game_sprint_offense",
  "shot_track_chart",
  body,
  "team",
  "game"
);
