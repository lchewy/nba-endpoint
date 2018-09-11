import { getFunc2 } from "../utils/getFn";
import lineups from "../../definitions/nba_lineups";

export default getFunc2(
  "team's lineup within a game",
  "team_game_lineups",
  "nba_lineups",
  lineups,
  "team",
  "game"
);
