import {getFunc} from "../utils/getFn";
import paint_drive_location from "../../definitions/paint_drive_location";

export default getFunc(
  "game paint drive location team",
  "game_paint_drive_location_team",
  "paint_drive_direction",
  paint_drive_location,
  "game"
);
