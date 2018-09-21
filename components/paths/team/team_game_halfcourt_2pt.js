import { getFunc2 } from "../utils/getFn";
import {
  shot_tracks_chart,
  shot_tracks_chart_sub
} from "../../definitions/common";

const body = {
  type: "object",
  properties: { 
    halfcourt_2pt:{
      type:"array",
      items: {
        type:"object",
        properties: {...shot_tracks_chart, shot_tracks: shot_tracks_chart_sub }
      }
    }
  }
};

export default getFunc2(
  "a teams halfcourt 2 pointers",
  "team_game_halfcourt_2pt",
  "shot_track_chart",
  body,
  "team",
  "game"
);
