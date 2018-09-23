// import {
//   shot_tracks_chart_2pt,
//   shot_tracks_chart_3pt,
//   shot_tracks_chart_early_o,
//   shot_tracks_chart_late_clock
// } from "./shot_tracks_chart";        // DELETE MAYBE

import shot_tracks_chart_team from "./shot_tracks_chart_team";
import post_play from "./post_play";
import paint_drive_location from "./paint_drive_location";
import shot_tracks_time from "./shot_tracks_time";
import shot_tracks_length from "./shot_tracks_length";
import rating from "./rating";
import similarities from "./similarities";
import style_comps from "./style_comps";
import trends_player from "./trends_player";
import trends_team from "./trends_team";
import top_3_players from "./top_3_players";
import both_3_players from "./both_3_players";
import bottom_3_players from "./bottom_3_players";
import most_favorable_stretch from "./most_favorable_stretch";
import least_favorable_stretch from "./least_favorable_stretch";
import {
  court_zone_1,
  court_zone_2,
  court_zone_3,
  court_zone_4
} from "./player_shot_zones";
import chemistry from "./chemistry";
import matchup_comparison from "./matchup_comparison";
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
import three_matchups from "./three_matchups"

/*   CHECK IF DELETE THESE FILES 
// import team_game_nba_1on1_matchups from "./team_game_nba_1on1_matchups";
// import team_game_shot_taking_making from "./team_game_shot_taking_making";
// import team_game_lineups from "./team_game_lineups";

*/
import team_game_shot_tracks from "./team_game_shot_tracks";
import team_game_halfcourt_2pt from "./team_game_halfcourt_2pt";
import team_game_halfcourt_3pt from "./team_game_halfcourt_3pt";
import team_game_late_clock from "./team_game_late_clock"
import team_game_shot_probability from "./team_game_shot_probability";
import team_game_sprint_offense from "./team_game_sprint_offense";
import team_game_shot_tracks_shot_tracks from "./team_game_shot_tracks_shot_tracks";

// no court_player_season_shots

export default {
  // "/team/{teamId}/type/shot_tracks_chart_2pt": shot_tracks_chart_2pt,
  // "/team/{teamId}/type/shot_tracks_chart_3pt": shot_tracks_chart_3pt,
  // "/team/{teamId}/type/shot_tracks_chart_early_o": shot_tracks_chart_early_o,
  // "/team/{teamId}/type/shot_tracks_chart_late_clock": shot_tracks_chart_late_clock, // DELETE



  "/team/{teamId}/type/shot_tracks": shot_tracks_chart_team,
  "/team/{teamId}/type/shooting_breakdown": shot_probability,
  "/team/{teamId}/type/paint_drive_direction": paint_drive_location,
  "/team/{teamId}/type/post_play_location": post_play,
  "/team/{teamId}/type/shot_tracks_time": shot_tracks_time,
  "/team/{teamId}/type/shot_tracks_length": shot_tracks_length,
  "/team/{teamId}/type/offensive_and_defensive_ratings": rating,
  "/team/{teamId}/type/skill_similarity": similarities,
  "/team/{teamId}/type/style_similarity": style_comps,
  "/team/{teamId}/type/player_trends": trends_player,
  "/team/{teamId}/type/team_trends": trends_team,
  "/team/{teamId}/type/top_shot_makers": top_3_players,
  "/team/{teamId}/type/shot_taking": both_3_players,
  "/team/{teamId}/type/bottom_shot_makers": bottom_3_players,
  "/team/{teamId}/type/key_stretch": key_stretch,
  "/team/{teamId}/type/court_zone_1": court_zone_1,
  "/team/{teamId}/type/court_zone_2": court_zone_2,
  "/team/{teamId}/type/court_zone_3": court_zone_3,
  "/team/{teamId}/type/court_zone_4": court_zone_4,
  "/team/{teamId}/type/teammate_chemistry": chemistry,
  "/team/{teamId}/type/matchup_comparison": matchup_comparison,
   "/team/{teamId}/type/three_matchups": three_matchups,
  "/team/{teamId}/type/1_on_1_matchups": nba_1on1_matchups,
  "/team/{teamId}/type/team_ranks": team_rank,
  "/team/{teamId}/type/lineups": nba_lineups,
  "/team/{teamId}/type/nba_lineups_starting": nba_lineups_starting,
  "/team/{teamId}/type/shot_taking_and_making": nba_shot_taking_making,
  
  
  // "/team/{teamId}/type/sport_key_stretch_most_favorable": most_favorable_stretch, // DELETE
  // "/team/{teamId}/type/sport_key_stretch_least_favorable": least_favorable_stretch, // DELETE
    // "/team/{teamId}/type/nba_seasonal_matchup_easiest_off": emOffense, // DELETE
  // "/team/{teamId}/type/nba_seasonal_matchup_toughest_off": tmOffense, // DELETE
  // "/team/{teamId}/type/nba_seasonal_matchup_easiest_def": emDefense, // DELETE
  // "/team/{teamId}/type/nba_seasonal_matchup_toughest_def": tmDefense, // DELETE


  "/team/{teamId}/game/{gameId}/type/shot_tracks": team_game_shot_tracks,
  "/team/{teamId}/game/{gameId}/type/shot_tracks/halfcourt_2pt": team_game_halfcourt_2pt,
  "/team/{teamId}/game/{gameId}/type/shot_tracks/halfcourt_3pt": team_game_halfcourt_3pt,
  "/team/{teamId}/game/{gameId}/type/shot_tracks/late_clock": team_game_late_clock,
  "/team/{teamId}/game/{gameId}/type/shot_tracks/sprint_offense": team_game_sprint_offense,
  "/team/{teamId}/game/{gameId}/type/shot_tracks/shot_tracks": team_game_shot_tracks_shot_tracks,
  "/team/{teamId}/game/{gameId}/type/shooting_breakdown": team_game_shot_probability,
  "/team/{teamId}/game/{gameId}/type/paint_drive_direction": paint_drive_location,
  "/team/{teamId}/game/{gameId}/type/shot_tracks_time": shot_tracks_time,
  "/team/{teamId}/game/{gameId}/type/shot_tracks_length": shot_tracks_length,
  "/team/{teamId}/game/{gameId}/type/top_shot_makers": top_3_players,
  "/team/{teamId}/game/{gameId}/type/shot_taking": both_3_players,
  "/team/{teamId}/game/{gameId}/type/bottom_shot_makers": bottom_3_players,
  "/team/{teamId}/game/{gameId}/type/matchup_comparison": matchup_comparison,
  "/team/{teamId}/game/{gameId}/type/1_on_1_matchups": nba_1on1_matchups,
  "/team/{teamId}/game/{gameId}/type/lineups": nba_lineups,
  "/team/{teamId}/game/{gameId}/type/nba_lineups_starting": nba_lineups_starting,
  "/team/{teamId}/game/{gameId}/type/shot_taking_and_making": nba_shot_taking_making



  // "/team/{teamId}/game/{gameId}/type/shot_probability": team_game_shot_probability,
  // "/team/{teamId}/game/{gameId}/type/nba_1on1_matchups": team_game_nba_1on1_matchups,
  // "/team/{teamId}/game/{gameId}/type/nba_shot_taking_making": team_game_shot_taking_making,
  // "/team/{teamId}/game/{gameId}/type/nba_lineups": team_game_lineups
};

// 583ecae2-fb46-11e1-82cb-f4ce4684ea4c
// ff1c4678-1862-42d5-8735-5c8693f3cc4a

// 5382cf43-3a79-4a5a-a7fd-153906fe65dd
