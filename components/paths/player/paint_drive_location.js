import { getFunc, getFunc2 } from "../utils/getFn";
// import paint_drive_location from "../../definitions/paint_drive_location";
import { paint_drive_location } from "../../definitions/common";

const body = {
  type:"object",
  properties: paint_drive_location
}

export const player_paint_drive_direction = getFunc(
  "paint drive location player",
  "player_paint_drive_direction",
  "paint_drive_direction",
  body,
  "player"
);

export const player_game_paint_drive_direction = getFunc2(
  "paint drive location player",
  "player_game_paint_drive_direction",
  "paint_drive_direction",
  body,
  "player",
  "game"
);
