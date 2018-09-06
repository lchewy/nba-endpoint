import shot_tracks from "../../definitions/shot_tracks";
import getFunc from "../utils/getFn";

export default getFunc(
  "shot tracks time",
  "shot_tracks_time",
  "nba_on_off_ball_by_time",
  shot_tracks,
  "team"
);
