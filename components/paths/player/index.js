import post_play from "./post_play";
import paint_drive_location from "./paint_drive_location";
import { shotTracksLength, shotTracksTime } from "./shot_tracks";
import similarities from "./similarities";
import style_comps from "./style_comps";
import trends_player from "./trends_player";
import chemistry from "./chemistry";
import matchup_comparison from "./matchup_comparison";
import {
  court_zone_1,
  court_zone_2,
  court_zone_3,
  court_zone_4
} from "./player_shot_zones";
import {
  emOffense,
  emDefense,
  tmOffense,
  tmDefense
} from "./nba_seasonal_matchup";
import nba_1on1_matchups from "./nba_1on1_matchups";
import rating from "./rating";


export default {
  "/en_US/NBA/player/{playerId}/type/post_play_player": post_play,
  "/en_US/NBA/player/{playerId}/type/paint_drive_location": paint_drive_location,
  "/en_US/NBA/player/{playerId}/type/shot_tracks_length": shotTracksLength,
  "/en_US/NBA/player/{playerId}/type/shot_tracks_time": shotTracksTime,
  "/en_US/NBA/player/{playerId}/type/rating": rating,
  "/en_US/NBA/player/{playerId}/type/similarities": similarities,
  "/en_US/NBA/player/{playerId}/type/style_comps": style_comps,
  "/en_US/NBA/player/{playerId}/type/trends_player": trends_player,
  "/en_US/NBA/player/{playerId}/type/court_zone_1": court_zone_1,
  "/en_US/NBA/player/{playerId}/type/court_zone_2": court_zone_2,
  "/en_US/NBA/player/{playerId}/type/court_zone_3": court_zone_3,
  "/en_US/NBA/player/{playerId}/type/court_zone_4": court_zone_4,
  "/en_US/NBA/player/{playerId}/type/chemistry": chemistry,
  "/en_US/NBA/player/{playerId}/type/matchup_comparison": matchup_comparison,
  "/en_US/NBA/player/{playerId}/type/nba_seasonal_matchup_easiest_off": emOffense,
  "/en_US/NBA/player/{playerId}/type/nba_seasonal_matchup_easiest_def": emDefense,
  "/en_US/NBA/player/{playerId}/type/nba_seasonal_matchup_toughest_off": tmOffense,
  "/en_US/NBA/player/{playerId}/type/nba_seasonal_matchup_toughest_def": tmDefense,
  "/en_US/NBA/player/{playerId}/type/nba_1on1_matchups": nba_1on1_matchups


  // "/en_US/NBA/player/{playerId}/offensive_rating": offensive_rating, // no offensive rating url
  // "/en_US/NBA/player/{playerId}/nba_seasonal_matchup_easiest": nba_seasonal_matchup_easiest, // DELETE
  // "/en_US/NBA/player/{playerId}/nba_seasonal_matchup_toughest": nba_seasonal_matchup_toughest // DELETE
};
