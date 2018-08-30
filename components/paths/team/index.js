import post_play from "./post_play";
import paint_drive_location from "./paint_drive_location";
import shot_tracks_time from "./shot_tracks_time";
import shot_tracks_length from "./shot_tracks_length";
import offensive_rating from "./offensive_rating";
import trends_player from "./trends_player";
import trends_team from "./trends_team";
import sport_key_stretch from "./sport_key_stretch";
import {
  court_zone_1,
  court_zone_2,
  court_zone_3,
  court_zone_4
} from "./player_shot_zones";

import chemistry from "./chemistry";
import matchup_comparison from "./matchup_comparison";
import nba_seasonal_matchup_easiest from "./nba_seasonal_matchup_easiest";
import nba_seasonal_matchup_toughest from "./nba_seasonal_matchup_toughest";

export default {
  "/en_US/NBA/team/{teamId}/post_play": post_play,
  "/en_US/NBA/team/{teamId}/paint_drive_location": paint_drive_location,
  "/en_US/NBA/team/{teamId}/shot_tracks_time": shot_tracks_time,
  "/en_US/NBA/team/{teamId}/shot_tracks_length": shot_tracks_length,
  "/en_US/NBA/team/{teamId}/offensive_rating": offensive_rating,
  "/en_US/NBA/team/{teamId}/trends_player": trends_player,
  "/en_US/NBA/team/{teamId}/trends_team": trends_team,
  "/en_US/NBA/team/{teamId}/sport_key_stretch": sport_key_stretch,
  "/en_US/NBA/team/{teamId}/court_zone_1": court_zone_1,
  "/en_US/NBA/team/{teamId}/court_zone_2": court_zone_2,
  "/en_US/NBA/team/{teamId}/court_zone_3": court_zone_3,
  "/en_US/NBA/team/{teamId}/court_zone_4": court_zone_4,
  "/en_US/NBA/team/{teamId}/chemistry": chemistry,
  "/en_US/NBA/team/{teamId}/matchup_comparison": matchup_comparison,
  "/en_US/NBA/team/{teamId}/nba_seasonal_matchup_easiest": nba_seasonal_matchup_easiest,
  "/en_US/NBA/team/{teamId}/nba_seasonal_matchup_toughest": nba_seasonal_matchup_toughest,
};

// const list = [
//   { path: "post_play", obj: post_play },
//   { path: "paint_drive_location", obj: paint_drive_location },
//   { path: "shot_tracks_time", obj: shot_tracks_time },
//   { path: "shot_tracks_length", obj: shot_tracks_length },
//   { path: "offensive_rating", obj: offensive_rating },
//   { path: "trends_player", obj: trends_player },
//   { path: "trends_team", obj: trends_team }
// ];

// const testing = list.reduce((accumulator, currentVal, currentInd, arr) => {
//   console.log(accumulator);
//   return (accumulator[`/en_US/NBA/team/{teamId}/${currentInd}`] = "b");
// }, {});

// console.log("coffeeeee ", testing);

// export default testing;
