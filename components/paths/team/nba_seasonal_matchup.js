import {getFunc} from "../utils/getFn";
import {
  easiest_matchup_offense,
  toughest_matchup_offense,
  easiest_matchup_defense,
  toughest_matchup_defense
} from "../../definitions/nba_seasonal_matchup";

const easiest_offense = {
  type: "array",
  items: easiest_matchup_offense
};

const toughest_offense = {
  type: "array",
  items: toughest_matchup_offense
};

const easiest_defense = {
  type: "array",
  items: easiest_matchup_defense
};

const toughest_defense = {
  type: "array",
  items: toughest_matchup_defense
};

export const emOffense = getFunc(
  "team's easiest offensive matchup",
  "team_matchup_easiest_offense",
  "seasonal_matchup",
  easiest_offense,
  "team"
);

export const tmOffense = getFunc(
  "team's toughest offensive matchup",
  "team_matchup_toughest_offense",
  "seasonal_matchup",
  toughest_offense,
  "team"
);

export const emDefense = getFunc(
  "team's easiest defensive matchup",
  "team_matchup_easiest_defense",
  "seasonal_matchup",
  easiest_defense,
  "team"
);

export const tmDefense = getFunc(
  "team's toughest defensive matchup",
  "team_matchup_toughest_defense",
  "seasonal_matchup",
  toughest_defense,
  "team"
);
