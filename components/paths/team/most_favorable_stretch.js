import { getFunc } from "../utils/getFn";

const str = { type: "string" };

const body = {
  type: "array",
  items: {
  type: "object",
  properties: {
    player_ID: str,
    team_most_favorable_stretch_1: str,
    team_most_favorable_stretch_2: str,
    team_most_favorable_stretch_3: str,
    team_most_favorable_stretch_4: str,
    team_most_favorable_stretch_5: str,
    text_description: str,
    total_plus_minus: str,
    avg_per_game: str,
    lineup_avg_per_game: str,
    lineup_plus_minus: str,
    image_id: { type: "integer", format: "int32" }
    // card_image: str
  }
  }
};

export default getFunc(
  "best stretch",
  "team_sport_key_stretch_best",
  "sport_key_stretch",
  body,
  "team",
  "Best stretch of game for team"
);
