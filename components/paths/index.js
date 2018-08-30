import team from "./team";
import player from "./player"
const paths = {...team, ...player}
console.log("paths ", paths)
export default paths


// import post_play from "./common/post_play";
// import paint_drive_location from "./team/paint_drive_location";
// import shot_tracks_time from "./team/shot_tracks_time";
// import shot_tracks_length from "./team/shot_tracks_length";
// import offensive_rating from "./team/offensive_rating";
// import trends_player from "./team/trends_player";
// import trends_team from "./team/trends_team";
// import sport_key_stretch from "./team/sport_key_stretch";
// import {
//   court_zone_1,
//   court_zone_2,
//   court_zone_3,
//   court_zone_4
// } from "./team/player_shot_zones";

// import chemistry from "./team/chemistry";
// import matchup_comparison from "./team/matchup_comparison";
// import nba_seasonal_matchup_easiest from "./team/nba_seasonal_matchup_easiest";
// import nba_seasonal_matchup_toughest from "./team/nba_seasonal_matchup_toughest";
// export default {
//   "/en_US/NBA/team/{teamId}/post_play": post_play,
//   "/en_US/NBA/team/{teamId}/paint_drive_location": paint_drive_location,
//   "/en_US/NBA/team/{teamId}/shot_tracks_time": shot_tracks_time,
//   "/en_US/NBA/team/{teamId}/shot_tracks_length": shot_tracks_length,
//   "/en_US/NBA/team/{teamId}/offensive_rating": offensive_rating,
//   "/en_US/NBA/team/{teamId}/trends_player": trends_player,
//   "/en_US/NBA/team/{teamId}/trends_team": trends_team,
//   "/en_US/NBA/team/{teamId}/sport_key_stretch": sport_key_stretch,
//   "/en_US/NBA/team/{teamId}/court_zone_1": court_zone_1,
//   "/en_US/NBA/team/{teamId}/court_zone_2": court_zone_2,
//   "/en_US/NBA/team/{teamId}/court_zone_3": court_zone_3,
//   "/en_US/NBA/team/{teamId}/court_zone_4": court_zone_4,
//   "/en_US/NBA/team/{teamId}/chemistry": chemistry,
//   "/en_US/NBA/team/{teamId}/matchup_comparison": matchup_comparison,
//   "/en_US/NBA/team/{teamId}/nba_seasonal_matchup_easiest": nba_seasonal_matchup_easiest,
//   "/en_US/NBA/team/{teamId}/nba_seasonal_matchup_toughest": nba_seasonal_matchup_toughest
// };

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
