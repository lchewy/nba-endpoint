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
  "/player/{playerId}/type/post_play_player": post_play,
  "/player/{playerId}/type/paint_drive_location": paint_drive_location,
  "/player/{playerId}/type/shot_tracks_length": shotTracksLength,
  "/player/{playerId}/type/shot_tracks_time": shotTracksTime,
  "/player/{playerId}/type/rating": rating,
  "/player/{playerId}/type/similarities": similarities,
  "/player/{playerId}/type/style_comps": style_comps,
  "/player/{playerId}/type/trends_player": trends_player,
  "/player/{playerId}/type/court_zone_1": court_zone_1,
  "/player/{playerId}/type/court_zone_2": court_zone_2,
  "/player/{playerId}/type/court_zone_3": court_zone_3,
  "/player/{playerId}/type/court_zone_4": court_zone_4,
  "/player/{playerId}/type/chemistry": chemistry,
  "/player/{playerId}/type/matchup_comparison": matchup_comparison,
  "/player/{playerId}/type/nba_seasonal_matchup_easiest_off": emOffense,
  "/player/{playerId}/type/nba_seasonal_matchup_easiest_def": emDefense,
  "/player/{playerId}/type/nba_seasonal_matchup_toughest_off": tmOffense,
  "/player/{playerId}/type/nba_seasonal_matchup_toughest_def": tmDefense,
  "/player/{playerId}/type/nba_1on1_matchups": nba_1on1_matchups


  // "/player/{playerId}/offensive_rating": offensive_rating, // no offensive rating url
  // "/player/{playerId}/nba_seasonal_matchup_easiest": nba_seasonal_matchup_easiest, // DELETE
  // "/player/{playerId}/nba_seasonal_matchup_toughest": nba_seasonal_matchup_toughest // DELETE
};
