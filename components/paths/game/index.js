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
import shot_probability from "./shot_probability";
import shot_tracks from "./shot_tracks";
import game_possession from "./game_possession";
import {
  halfcourt_2pt,
  halfcourt_3pt,
  late_clock,
  sprint_offense,
  shot_tracks as shot_tracks_sub
} from "./shot_tracks_charts";

export default {
  "/game/{gameId}/type/shot_tracks": shot_tracks,
  "/game/{gameId}/type/shooting_breakdown": shot_probability,
  "/game/{gameId}/type/paint_drive_direction": paint_drive_location,
  "/game/{gameId}/type/shot_tracks_time": shot_tracks_time,
  "/game/{gameId}/type/shot_tracks_length": shot_tracks_length,
  "/game/{gameId}/type/top_shot_makers": top_3_players,
  "/game/{gameId}/type/shot_taking": both_3_players,
  "/game/{gameId}/type/bottom_shot_makers": bottom_3_players,
  "/game/{gameId}/type/matchup_comparison": matchup_comparison,
  "/game/{gameId}/type/1_on_1_matchups": nba_1on1_matchups,
  "/game/{gameId}/type/lineups": nba_lineups,
  "/game/{gameId}/type/nba_lineups_starting": nba_lineups_starting,
  "/game/{gameId}/type/shot_taking_and_making": nba_shot_taking_making,
  "/game/{gameId}/type/game_possession": game_possession,

  "/game/{gameId}/type/shot_tracks/halfcourt_2pt": halfcourt_2pt,
  "/game/{gameId}/type/shot_tracks/halfcourt_3pt": halfcourt_3pt,
  "/game/{gameId}/type/shot_tracks/late_clock": late_clock,
  "/game/{gameId}/type/shot_tracks/sprint_offense": sprint_offense,
  "/game/{gameId}/type/shot_tracks/shot_tracks": shot_tracks_sub,
};
