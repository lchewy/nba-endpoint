import post_play from "./post_play";
import {player_game_paint_drive_direction, player_paint_drive_direction} from "./paint_drive_location";
import {
  shotTracksPlayers,
  shotTracksPlayerGame,
  playerGameShotTracksLength,
  playerGameShotTracksTime,
  playerShotTracksLength,
  playerShotTracksTime
} from "./shot_tracks";
import similarities from "./similarities";
import style_comps from "./style_comps";
import trends_player from "./trends_player";
import chemistry from "./chemistry";
import {
  player_matchup_comparison,
  player_game_matchup_comparison
} from "./matchup_comparison";
import {
  court_zone_1,
  court_zone_2,
  court_zone_3,
  court_zone_4
} from "./player_shot_zones";


// DELETE
// import {
//   emOffense,
//   emDefense,
//   tmOffense,
//   tmDefense
// } from "./nba_seasonal_matchup";


import {
  player_1on1_matchups,
  player_game_1on1_matchups
} from "./nba_1on1_matchups";
import rating from "./rating";
import three_matchups from "./three_matchup";


export default {
  "/player/{playerId}/type/shot_tracks": shotTracksPlayers,
  "/player/{playerId}/type/post_play_location": post_play,
  "/player/{playerId}/type/paint_drive_direction": player_paint_drive_direction,
  "/player/{playerId}/type/shot_tracks_length": playerShotTracksLength,
  "/player/{playerId}/type/shot_tracks_time": playerShotTracksTime,
  "/player/{playerId}/type/offensive_and_defensive_ratings": rating,
  "/player/{playerId}/type/skill_similarity": similarities,
  "/player/{playerId}/type/style_similarity": style_comps,
  "/player/{playerId}/type/player_trends": trends_player,
  "/player/{playerId}/type/court_zone_1": court_zone_1,
  "/player/{playerId}/type/court_zone_2": court_zone_2,
  "/player/{playerId}/type/court_zone_3": court_zone_3,
  "/player/{playerId}/type/court_zone_4": court_zone_4,
  "/player/{playerId}/type/teammate_chemistry": chemistry,
  "/player/{playerId}/type/matchup_comparison": player_matchup_comparison,
  "/player/{playerId}/type/three_matchups": three_matchups,
  "/player/{playerId}/type/1on1_matchups": player_1on1_matchups,
  
  
  
  "/player/{playerId}/game/{gameId}/type/shot_tracks": shotTracksPlayerGame,
  "/player/{playerId}/game/{gameId}/type/paint_drive_direction": player_game_paint_drive_direction,
  "/player/{playerId}/game/{gameId}/type/shot_tracks_time":  playerGameShotTracksTime,
  "/player/{playerId}/game/{gameId}/type/shot_tracks_length": playerGameShotTracksLength,
  "/player/{playerId}/game/{gameId}/type/matchup_comparison": player_game_matchup_comparison,
  "/player/{playerId}/game/{gameId}/type/1_on_1_matchups": player_game_1on1_matchups
  
  // "/player/{playerId}/offensive_rating": offensive_rating, // no offensive rating url
  // "/player/{playerId}/nba_seasonal_matchup_easiest": nba_seasonal_matchup_easiest, // DELETE
  // "/player/{playerId}/nba_seasonal_matchup_toughest": nba_seasonal_matchup_toughest // DELETE
  // "/player/{playerId}/type/nba_seasonal_matchup_easiest_off": emOffense, // DELETE
  // "/player/{playerId}/type/nba_seasonal_matchup_easiest_def": emDefense, // DELETE
  // "/player/{playerId}/type/nba_seasonal_matchup_toughest_off": tmOffense, // DELETE
  // "/player/{playerId}/type/nba_seasonal_matchup_toughest_def": tmDefense, // DELETE
};
