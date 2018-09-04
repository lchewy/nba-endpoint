import getFunc from "../utils/getFn";
import chemistry from "../../definitions/chemistry";

export default getFunc(
  "chemistry",
  "chemistry_player",
  "chemistry",
  chemistry,
  "player",
  "Get the chemistry level (ranked from 'Poor' to 'Great') between 2 players on a team, including their three best/worst plays with each other."
);
