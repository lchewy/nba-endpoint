import nba_shot_taking_making from "./nba_shot_taking_making";
import { nba_lineups, nba_lineups_starting } from "./nba_lineups";
import nba_1on1_matchups from "./nba_1on1_matchups";
import matchup_comparison from "./matchup_comparison";
import bottom_3_players from "./bottom_3_players";
import both_3_players from "./both_3_players";
import top_3_players from "./top_3_players";

import shot_tracks_length from "./shot_tracks_length";
import shot_tracks_time from "./shot_tracks_time";
import paint_drive_location from "./paint_drive_location";
import shot_probability from "./shot_probability"
import shot_tracks from "./shot_tracks"

export default {

  "/game/{gameId}/type/shot_tracks": shot_tracks,
  "/game/{gameId}/type/shot_probability": shot_probability,
  "/game/{gameId}/type/paint_drive_location": paint_drive_location,
  "/game/{gameId}/type/shot_tracks_time": shot_tracks_time,
  "/game/{gameId}/type/shot_tracks_length": shot_tracks_length,
  "/game/{gameId}/type/top_3_players": top_3_players,
  "/game/{gameId}/type/both_3_players": both_3_players,
  "/game/{gameId}/type/bottom_3_players": bottom_3_players,
  "/game/{gameId}/type/matchup_comparison": matchup_comparison,
  "/game/{gameId}/type/nba_1on1_matchups": nba_1on1_matchups,
  "/game/{gameId}/type/nba_lineups": nba_lineups,
  "/game/{gameId}/type/nba_lineups_starting": nba_lineups_starting,
  "/game/{gameId}/type/nba_shot_taking_making": nba_shot_taking_making
};
