import { getFunc } from "../utils/getFn";
import { shot_tracks_chart, str, possession, trends } from "../../definitions/common";
import nba_shot_taking_making from "../../definitions/nba_shot_taking_making";
import shot_probability from "../../definitions/shot_probability";
import lineups from "../../definitions/nba_lineups";
import matchup_comparison from "../../definitions/matchup_comparison";
import nba_1on1_matchups from "../../definitions/nba_1on1_matchups";



const shot_tracks_chart_home = {
  type: "object",
  properties: {
    all_shots: {
      type: "array",
      items: {
        type: "object",
        properties: {
          player_ID: str,
          ...shot_tracks_chart
        }
      }
    }
  }
};

const sport_game_possession = {
  type: "array",
  items: {
    type: "object",
    properties: possession
  }
};

const trends_team = {
  type: "array",
  items: {
    type: "object",
    properties: trends
  }
};

const trends_player = {
  type: "object",
  properties: { player_ID: str, ...trends }
};

const body = {
  type: "object",
  properties: {
    shot_tracks_chart_home,
    shot_tracks_chart_away: shot_tracks_chart_home,
    nba_shot_taking_making,
    shooting_breakdown: shot_probability,
    nba_lineups: lineups,
    sport_game_possession,
    trends_team,
    trends_player,
    matchup_comparison_home: matchup_comparison,
    matchup_comparison_away: matchup_comparison,
    "1_on_1_matchups_home": nba_1on1_matchups,
    "1_on_1_matchups_away": nba_1on1_matchups
  }
};

export default getFunc("pregame", "game_pregame", null, body, "game", "", true);
