import shot_tracks from "../../definitions/shot_tracks";
import getFunc from "../utils/getFn";

export default getFunc(
  "shot tracks length",
  "shot_tracks_length",
  "nba_on_off_ball",
  shot_tracks,
  "team"
);
