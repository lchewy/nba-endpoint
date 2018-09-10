import getFunc from "../utils/getFn";
import { zone_1, zone_2, zone_3, zone_4 } from "../../definitions/zones";

// const str = { type: "string" };

// const three_zones = {
//   type: "object",
//   properties: {
//     "3-pointer_attempts": str,
//     "3-pointer_eFG_pct": str,
//     "3-pointer_points_per_shot": str,
//     midrange_attempts: str,
//     midrange_eFG_pct: str,
//     midrange_points_per_shot: str,
//     paint_attempts: str,
//     paint_eFG_pct: str,
//     paint_points_per_shot: str,
//     graphic_title: str,
//     card_image: str
//   }
// };

// const five_zones = {
//   // on Teams paths some have only 14 instead of 17 properties
//   type: "object",
//   properties: {
//     midrange_attempts: str,
//     midrange_eFG_pct: str,
//     midrange_points_per_shot: str,
//     left_corner_3_attempts: str,
//     left_corner_3_eFG_pct: str,
//     left_corner_3_points_per_shot: str,
//     "3-pointer_attempts": str,
//     "3-pointer_eFG_pct": str,
//     "3-pointer_points_per_shot": str,
//     paint_attempts: str,
//     paint_eFG_pct: str,
//     paint_points_per_shot: str,
//     right_corner_3_attempts: str,
//     right_corner_3_eFG_pct: str,
//     right_corner_3_points_per_shot: str,
//     graphic_title: str,
//     card_image: str
//   }
// };

// const seven_zones = {
//   type: "object",
//   properties: {
//     paint_attempts: str,
//     paint_eFG_pct: str,
//     paint_points_per_shot: str,
//     low_right_attempts: str,
//     low_right_eFG_pct: str,
//     low_right_points_per_shot: str,
//     "3-pointer_attempts": str,
//     "3-pointer_eFG_pct": str,
//     "3-pointer_points_per_shot": str,
//     low_left_attempts: str,
//     low_left_eFG_pct: str,
//     low_left_points_per_shot: str,
//     straight_attempts: str,
//     straight_eFG_pct: str,
//     straight_points_per_shot: str,
//     graphic_title: str,
//     card_image: str
//   }
// };

// const fourteen_zones = {
//   type: "object",
//   properties: {
//     under_the_hoop_post_attempts: str,
//     under_the_hoop_post_eFG_pct: str,
//     under_the_hoop_post_points_per_shot: str,
//     right_post_attempts: str,
//     right_post_eFG_pct: str,
//     right_post_points_per_shot: str,
//     right_corner_3_attempts: str,
//     right_corner_3_eFG_pct: str,
//     right_corner_3_points_per_shot: str,
//     left_3_attempts: str,
//     left_3_eFG_pct: str,
//     left_3_points_per_shot: str,
//     middle_post_attempts: str,
//     middle_post_eFG_pct: str,
//     middle_post_points_per_shot: str,
//     left_corner_3_attempts: str,
//     left_corner_3_eFG_pct: str,
//     left_corner_3_points_per_shot: str,
//     far_left_midrange_attempts: str,
//     far_left_midrange_eFG_pct: str,
//     far_left_midrange_points_per_shot: str,
//     middle_right_midrange_attempts: str,
//     middle_right_midrange_eFG_pct: str,
//     middle_right_midrange_points_per_shot: str,
//     right_3_attempts: str,
//     right_3_eFG_pct: str,
//     right_3_points_per_shot: str,
//     left_post_attempts: str,
//     left_post_eFG_pct: str,
//     left_post_points_per_shot: str,
//     middle_left_midrange_attempts: str,
//     middle_left_midrange_eFG_pct: str,
//     middle_left_midrange_points_per_shot: str,
//     center_3_attempts: str,
//     center_3_eFG_pct: str,
//     center_3_points_per_shot: str,
//     far_right_midrange_attempts: str,
//     far_right_midrange_eFG_pct: str,
//     far_right_midrange_points_per_shot: str,
//     graphic_title: str,
//     card_image: str
//   }
// };

// const zone_1 = {
//   type: "array",
//   items: three_zones
// };

// const zone_2 = {
//   type: "array",
//   items: five_zones
// };
// const zone_3 = {
//   type: "array",
//   items: seven_zones
// };
// const zone_4 = {
//   type: "array",
//   items: fourteen_zones
// };

export const court_zone_1 = getFunc(
  "player shot zones",
  "player_shot_zones_1",
  "court_zones",
  zone_1,
  "team",
  "a player's shot attempts and percentages broken down to three zones"
);

export const court_zone_2 = getFunc(
  "player shot zones",
  "player_shot_zones_2",
  "court_zones",
  zone_2,
  "team",
  "a player's shot attempts and percentages broken down to five zones"
);

export const court_zone_3 = getFunc(
  "player shot zones",
  "player_shot_zones_3",
  "court_zones",
  zone_3,
  "team",
  "a player's shot attempts and percentages broken down to seven zones"
);

export const court_zone_4 = getFunc(
  "player shot zones",
  "player_shot_zones_4",
  "court_zones",
  zone_4,
  "team",
  "a player's shot attempts and percentages broken down to fourteen zones"
);
