import {getFunc} from "../utils/getFn";
import {
  easiest_matchup_offense,
  toughest_matchup_offense,
  easiest_matchup_defense,
  toughest_matchup_defense
} from "../../definitions/nba_seasonal_matchup";

export const emOffense = getFunc(
  "team's easiest offensive matchup",
  "team_matchup_easiest_offense",
  "nba_seasonal_matchup",
  easiest_matchup_offense,
  "player"
);

export const tmOffense = getFunc(
  "team's toughest offensive matchup",
  "team_matchup_toughest_offense",
  "nba_seasonal_matchup",
  toughest_matchup_offense,
  "player"
);

export const emDefense = getFunc(
  "team's easiest defensive matchup",
  "team_matchup_easiest_defense",
  "nba_seasonal_matchup",
  easiest_matchup_defense,
  "player"
);

export const tmDefense = getFunc(
  "team's toughest defensive matchup",
  "team_matchup_toughest_defense",
  "nba_seasonal_matchup",
  toughest_matchup_defense,
  "player"
);
