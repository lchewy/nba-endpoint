import {getFunc} from "../utils/getFn";
import lineups from "../../definitions/nba_lineups";

export const nba_lineups = getFunc(
  "team lineups against opponents",
  "team_nba_lineups",
  "nba_lineups",
  lineups,
  "game"
);

export const nba_lineups_starting = getFunc(
  "team lineups against opponents",
  "team_nba_lineups_starting",
  "nba_lineups",
  lineups,
  "game"
);
