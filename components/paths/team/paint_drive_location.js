import {getFunc, getFunc2} from "../utils/getFn";
import paint_drive_location from "../../definitions/paint_drive_location";

export const team_paint_drive_direction =  getFunc(
  "paint drive direction team",
  "paint_drive_direction_team",
  "paint_drive_direction",
  paint_drive_location,
  "team"
);

export const team_game_paint_drive_direction = getFunc2(
  "paint drive direction team",
  "paint_drive_direction_team_game",
  "paint_drive_direction",
  paint_drive_location,
  "team",
  "game"
)
