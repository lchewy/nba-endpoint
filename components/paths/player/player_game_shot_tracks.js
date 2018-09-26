import { getFunc2 } from "../utils/getFn";
import {
  shot_tracks_chart,
  shot_tracks_chart_sub
} from "../../definitions/common";

const body = {
  type: "array",
  items: {
    type: "object",
    properties: { ...shot_tracks_chart, shot_tracks: shot_tracks_chart_sub }
  }
};

export default getFunc2(
  "players shot tracks locations",
  "player_game_shot_tracks_shot_tracks",
  "shot_tracks",
  body,
  "player",
  "game"
);
