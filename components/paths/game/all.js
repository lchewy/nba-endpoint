import {getFunc} from "../utils/getFn";
import shot_probability from "../../definitions/shot_probability";
import top_3_players from "../../definitions/top_3";
import { shot_tracks_chart, shot_tracks } from "../../definitions/common";
import paint_drive_location from "../../definitions/paint_drive_location";
import matchup_comparison from "../../definitions/matchup_comparison";
import nba_1on1_matchups from "../../definitions/nba_1on1_matchups";
import lineups from "../../definitions/nba_lineups";
import nba_shot_taking_making from "../../definitions/nba_shot_taking_making";


const game_shot_tracks_chart = {
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

const game_shot_tracks_time = {
  type: "array",
  items: {
    type: "object",
    properties: {
      ...shot_tracks,
      player_ID: { type: "string" },
      graphic_title: { type: "string" },
      game_ID: { type: "string" }
    }
  }
};

const game_shot_tracks_length = {
  type: "array",
  items: {
    type: "object",
    properties: {
      ...shot_tracks,
      player_ID: { type: "string" },
      graphic_title: { type: "string" },
      game_ID: { type: "string" }
    }
  }
};



const body = {
  type: "object",
  properties: {
    shot_probability,
    shot_tracks_chart: game_shot_tracks_chart,
    shot_tracks_time: game_shot_tracks_time,
    shot_tracks_length: game_shot_tracks_length,
    shot_makers: top_3_players,
    paint_drive_location,
    matchup_comparison,
    nba_1on1_matchups,
    nba_lineups: lineups,
    nba_shot_taking_making,

  }
};

export default getFunc("all games endpoint", "game_all", "")
