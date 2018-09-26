import { getFunc2 } from "../utils/getFn";
import lineups from "../../definitions/nba_lineups";

export const team_game_lineups =  getFunc2(
  "team's lineup within a game",
  "team_game_lineups",
  "nba_lineups",
  lineups,
  "team",
  "game"
);

export const team_game_lineups_starting =  getFunc2(
  "team's starting lineup within a game",
  "team_game_lineups_starting",
  "nba_lineups",
  lineups,
  "team",
  "game"
);