import shot_tracks_chart_team from "./shot_tracks_chart_team";
import post_play from "./post_play";
import {
  team_paint_drive_direction,
  team_game_paint_drive_direction
} from "./paint_drive_location";
import {
  team_shot_tracks_time,
  team_game_shot_tracks_time
} from "./shot_tracks_time";
import {
  team_game_shot_tracks_length,
  team_shot_tracks_length
} from "./shot_tracks_length";
import rating from "./rating";
import similarities from "./similarities";
import style_comps from "./style_comps";
import trends_player from "./trends_player";
import trends_team from "./trends_team";
import {
  team_game_top_shot_makers,
  team_top_shot_makers
} from "./top_3_players";
import { team_game_shot_taking, team_shot_taking } from "./both_3_players";
import {
  team_bottom_shot_makers,
  team_game_bottom_shot_makers
} from "./bottom_3_players";

import {
  court_zone_1,
  court_zone_2,
  court_zone_3,
  court_zone_4
} from "./player_shot_zones";
import chemistry from "./chemistry";
import {
  team_game_matchup_comparison,
  team_matchup_comparison
} from "./matchup_comparison";
import {
  emOffense,
  tmOffense,
  emDefense,
  tmDefense
} from "./nba_seasonal_matchup";
import nba_1on1_matchups from "./nba_1on1_matchups";
import team_rank from "./team_rank";
import { nba_lineups, nba_lineups_starting } from "./nba_lineups";
import nba_shot_taking_making from "./nba_shot_taking_making";
import shot_probability from "./shot_probability";
import key_stretch from "./key_stretch";
import three_matchups from "./three_matchups";
import { game_possession, team_game_possession } from "./game_possession";

import team_game_nba_1on1_matchups from "./team_game_nba_1on1_matchups";
import {
  team_game_lineups,
  team_game_lineups_starting
} from "./team_game_lineups";

import team_game_shot_taking_making from "./team_game_shot_taking_making";
import team_game_shot_tracks from "./team_game_shot_tracks";
import team_game_halfcourt_2pt from "./team_game_halfcourt_2pt";
import team_game_halfcourt_3pt from "./team_game_halfcourt_3pt";
import team_game_late_clock from "./team_game_late_clock";
import team_game_shot_probability from "./team_game_shot_probability";
import team_game_sprint_offense from "./team_game_sprint_offense";
import team_game_shot_tracks_shot_tracks from "./team_game_shot_tracks_shot_tracks";

// no court_player_season_shots

export default {
  "/team/{teamId}/type/shot_tracks": shot_tracks_chart_team,
  "/team/{teamId}/type/shooting_breakdown": shot_probability,
  "/team/{teamId}/type/paint_drive_direction": team_paint_drive_direction,
  "/team/{teamId}/type/post_play_location": post_play,
  "/team/{teamId}/type/shot_tracks_time": team_shot_tracks_time,
  "/team/{teamId}/type/shot_tracks_length": team_shot_tracks_length,
  "/team/{teamId}/type/offensive_and_defensive_ratings": rating,
  "/team/{teamId}/type/skill_similarity": similarities,
  "/team/{teamId}/type/style_similarity": style_comps,
  "/team/{teamId}/type/player_trends": trends_player,
  "/team/{teamId}/type/team_trends": trends_team,
  "/team/{teamId}/type/top_shot_makers": team_top_shot_makers,
  "/team/{teamId}/type/shot_taking": team_shot_taking,
  "/team/{teamId}/type/bottom_shot_makers": team_bottom_shot_makers,
  "/team/{teamId}/type/key_stretch": key_stretch,
  "/team/{teamId}/type/court_zone_1": court_zone_1,
  "/team/{teamId}/type/court_zone_2": court_zone_2,
  "/team/{teamId}/type/court_zone_3": court_zone_3,
  "/team/{teamId}/type/court_zone_4": court_zone_4,
  "/team/{teamId}/type/teammate_chemistry": chemistry,
  "/team/{teamId}/type/matchup_comparison": team_matchup_comparison,
  "/team/{teamId}/type/three_matchups": three_matchups,
  "/team/{teamId}/type/1_on_1_matchups": nba_1on1_matchups,
  "/team/{teamId}/type/team_ranks": team_rank,
  "/team/{teamId}/type/lineups": nba_lineups,
  "/team/{teamId}/type/nba_lineups_starting": nba_lineups_starting,
  "/team/{teamId}/type/shot_taking_and_making": nba_shot_taking_making,
  "/team/{teamId}/type/game_possession": game_possession,

  "/team/{teamId}/game/{gameId}/type/shot_tracks": team_game_shot_tracks,
  "/team/{teamId}/game/{gameId}/type/shot_tracks/halfcourt_2pt": team_game_halfcourt_2pt,
  "/team/{teamId}/game/{gameId}/type/shot_tracks/halfcourt_3pt": team_game_halfcourt_3pt,
  "/team/{teamId}/game/{gameId}/type/shot_tracks/late_clock": team_game_late_clock,
  "/team/{teamId}/game/{gameId}/type/shot_tracks/sprint_offense": team_game_sprint_offense,
  "/team/{teamId}/game/{gameId}/type/shot_tracks/shot_tracks": team_game_shot_tracks_shot_tracks,
  "/team/{teamId}/game/{gameId}/type/shooting_breakdown": team_game_shot_probability,
  "/team/{teamId}/game/{gameId}/type/paint_drive_direction": team_game_paint_drive_direction,
  "/team/{teamId}/game/{gameId}/type/shot_tracks_time": team_game_shot_tracks_time,
  "/team/{teamId}/game/{gameId}/type/shot_tracks_length": team_game_shot_tracks_length,
  "/team/{teamId}/game/{gameId}/type/top_shot_makers": team_game_top_shot_makers,
  "/team/{teamId}/game/{gameId}/type/shot_taking": team_game_shot_taking,
  "/team/{teamId}/game/{gameId}/type/bottom_shot_makers": team_game_bottom_shot_makers,
  "/team/{teamId}/game/{gameId}/type/matchup_comparison": team_game_matchup_comparison,
  "/team/{teamId}/game/{gameId}/type/1_on_1_matchups": team_game_nba_1on1_matchups,
  "/team/{teamId}/game/{gameId}/type/lineups": team_game_lineups,
  "/team/{teamId}/game/{gameId}/type/nba_lineups_starting": team_game_lineups_starting,
  "/team/{teamId}/game/{gameId}/type/shot_taking_and_making": team_game_shot_taking_making,
  "/team/{teamId}/game/{gameId}/type/game_possession": team_game_possession
};
