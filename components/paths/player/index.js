import post_play from "./post_play";
import paint_drive_location from "./paint_drive_location";
import { shotTracksLength, shotTracksTime } from "./shot_tracks";
import offensive_rating from "./offensive_rating";
import trends_player from "./trends_player";
import chemistry from "./chemistry";
import matchup_comparison from "./matchup_comparison";
import nba_seasonal_matchup_easiest from "./nba_seasonal_matchup_easiest";
import nba_seasonal_matchup_toughest from "./nba_seasonal_matchup_toughest";

export default {
  "/en_US/NBA/player/{playerId}/post_play": post_play,
  "/en_US/NBA/player/{playerId}/paint_drive_location": paint_drive_location,
  "/en_US/NBA/player/{playerId}/shot_tracks_length": shotTracksLength,
  "/en_US/NBA/player/{playerId}/shot_tracks_time": shotTracksTime,
  "/en_US/NBA/player/{playerId}/offensive_rating": offensive_rating,
  "/en_US/NBA/player/{playerId}/trends_player": trends_player,
  "/en_US/NBA/player/{playerId}/chemistry": chemistry,
  "/en_US/NBA/player/{playerId}/matchup_comparison": matchup_comparison,
  "/en_US/NBA/player/{playerId}/nba_seasonal_matchup_easiest": nba_seasonal_matchup_easiest,
  "/en_US/NBA/player/{playerId}/nba_seasonal_matchup_toughest": nba_seasonal_matchup_toughest
};
