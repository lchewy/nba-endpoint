import getFunc from "../utils/getFn";

const str = { type: "string" };

const body = {
  type: "array",
  items: {
    type: "object",
    properties: {
      team_worst_stretch_1: str,
      team_worst_stretch_2: str,
      team_worst_stretch_3: str,
      team_worst_stretch_4: str,
      team_worst_stretch_5: str,
      text_description: { type: "array", items: str },
      total_plus_minus: str,
      avg_per_game: str,
      lineup_avg_per_game: str,
      lineup_plus_minus: str,
      card_image: str
    }
  }
};

export default getFunc(
  "sport key stretch",
  "sport_key_stretch",
  "sport_key_stretch",
  body,
  "team",
  "A breakdown of a team's worst stretches"
);