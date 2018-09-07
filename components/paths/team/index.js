// court_player_season_shots not on team path

import post_play from "./post_play";
import paint_drive_location from "./paint_drive_location";
import shot_tracks_time from "./shot_tracks_time";
import shot_tracks_length from "./shot_tracks_length";
import offensive_rating from "./offensive_rating";
import similarities from "./similarities";
import style_comps from "./style_comps";
import trends_player from "./trends_player";
import trends_team from "./trends_team";
import top_3_players from "./top_3_players";
import both_3_players from "./both_3_players";
import bottom_3_players from "./bottom_3_players";
import sport_key_stretch_best from "./sport_key_stretch_best";
import sport_key_stretch_worst from "./sport_key_stretch_worst";
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

// import nba_seasonal_matchup_easiest from "./nba_seasonal_matchup_easiest";  // DELETE FILE
// import nba_seasonal_matchup_toughest from "./nba_seasonal_matchup_toughest";// DELETE FILE

// import team_game_all from "./team_game_all";

export default {
  "/en_US/NBA/team/{teamId}/type/post_play_player": post_play,
  "/en_US/NBA/team/{teamId}/type/paint_drive_location": paint_drive_location,
  "/en_US/NBA/team/{teamId}/type/shot_tracks_time": shot_tracks_time,
  "/en_US/NBA/team/{teamId}/type/shot_tracks_length": shot_tracks_length,
  "/en_US/NBA/team/{teamId}/type/offensive_rating": offensive_rating,
  "/en_US/NBA/team/{teamId}/type/similarities": similarities,
  "/en_US/NBA/team/{teamId}/type/style_comps": style_comps,
  "/en_US/NBA/team/{teamId}/type/trends_player": trends_player,
  "/en_US/NBA/team/{teamId}/type/trends_team": trends_team,
  "/en_US/NBA/team/{teamId}/type/top_3_players": top_3_players,
  "/en_US/NBA/team/{teamId}/type/both_3_players": both_3_players,
  "/en_US/NBA/team/{teamId}/type/bottom_3_players": bottom_3_players,
  "/en_US/NBA/team/{teamId}/type/sport_key_stretch_best": sport_key_stretch_best,
  "/en_US/NBA/team/{teamId}/type/sport_key_stretch_worst": sport_key_stretch_worst,
  "/en_US/NBA/team/{teamId}/type/court_zone_1": court_zone_1,
  "/en_US/NBA/team/{teamId}/type/court_zone_2": court_zone_2,
  "/en_US/NBA/team/{teamId}/type/court_zone_3": court_zone_3,
  "/en_US/NBA/team/{teamId}/type/court_zone_4": court_zone_4,
  "/en_US/NBA/team/{teamId}/type/chemistry": chemistry,
  "/en_US/NBA/team/{teamId}/type/matchup_comparison": matchup_comparison,
  "/en_US/NBA/team/{teamId}/type/nba_seasonal_matchup_easiest_off": emOffense,
  "/en_US/NBA/team/{teamId}/type/nba_seasonal_matchup_toughest_off": tmOffense,
  "/en_US/NBA/team/{teamId}/type/nba_seasonal_matchup_easiest_def": emDefense,
  "/en_US/NBA/team/{teamId}/type/nba_seasonal_matchup_toughest_def": tmDefense,
  "/en_US/NBA/team/{teamId}/type/nba_1on1_matchups": nba_1on1_matchups,
  "/en_US/NBA/team/{teamId}/type/team_rank": team_rank,
  "/en_US/NBA/team/{teamId}/type/nba_lineups": nba_lineups,
  "/en_US/NBA/team/{teamId}/type/nba_lineups_starting": nba_lineups_starting,
  "/en_US/NBA/team/{teamId}/type/nba_shot_taking_making": nba_shot_taking_making,
  "/en_US/NBA/team/{teamId}/type/shot_probability": shot_probability

  // "/en_US/NBA/team/{teamId}/nba_seasonal_matchup_easiest": nba_seasonal_matchup_easiest, // DELETE FILE
  // "/en_US/NBA/team/{teamId}/nba_seasonal_matchup_toughest": nba_seasonal_matchup_toughest, // DELETE FILE
  // "/en_US/NBA/team/{teamId}/game/{gameId}/type/all": team_game_all
};
