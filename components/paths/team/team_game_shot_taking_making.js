import { getFunc2 } from "../utils/getFn";
import nba_shot_taking_making from "../../definitions/nba_shot_taking_making";

export default getFunc2(
  "A team's shot taking stats during away/home games",
  "team_game_shot_takin_making",
  "nba_shot_taking_making",
  nba_shot_taking_making,
  "team",
  "game"
);
