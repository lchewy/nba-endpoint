import { getFunc } from "../utils/getFn";
// import paint_drive_location from "../../definitions/paint_drive_location";
import { paint_drive_location } from "../../definitions/common";

const body = {
  type:"object",
  properties: paint_drive_location
}

export default getFunc(
  "paint drive location player",
  "paint_drive_location_player",
  "paint_drive_location",
  body,
  "player"
);
