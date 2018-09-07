import shot_tracks from "./shot_tracks";
import trends from "./trends";
import post_play from "./post_play";
import paint_drive_location from "./paint_drive_location";
import matchup_comparison from "./matchup_comparison";
// import nba_seasonal_matchup_easiest from "./nba_seasonal_matchup_easiest";
import chemistry from "./chemistry";
// import nba_seasonal_matchup_toughest from "./nba_seasonal_matchup_toughest";
import top_3 from "./top_3";
import {
  easiest_matchup_offense,
  toughest_matchup_offense,
  easiest_matchup_defense,
  toughest_matchup_defense
} from "./nba_seasonal_matchup";
import nba_lineups from "./nba_lineups";
import shot_tracks_chart from "./shot_tracks_chart";

const definitions = {
  shot_tracks_chart,
  shot_tracks,
  trends,
  post_play,
  paint_drive_location,
  matchup_comparison,
  chemistry,
  // nba_seasonal_matchup_easiest,
  // nba_seasonal_matchup_toughest,
  easiest_matchup_offense,
  toughest_matchup_offense,
  easiest_matchup_defense,
  toughest_matchup_defense,
  top_3,
  nba_lineups
};

export default definitions;
