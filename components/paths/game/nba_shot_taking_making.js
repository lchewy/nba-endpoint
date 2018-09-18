import {getFunc} from "../utils/getFn";
import nba_shot_taking_making from "../../definitions/nba_shot_taking_making";

export default getFunc(
    "a team's shot taking stats during away/home games",
    "game_nba_shot_taking_making",
    "nba_shot_taking_making",
    nba_shot_taking_making,
    "game"
  );
  