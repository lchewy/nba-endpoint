import getFunc from "../utils/getFn";

const str = { type: "string" };
const float = { type: "number", format: "float" };

const body = {
  type: "array",
  items: {
    type: "object",
    properties: {
      display_text: str,
      skill_most_similar_name_1: str,
      skill_most_similar_rating_1: float,
      skill_most_similar_name_2: str,
      skill_most_similar_rating_2: float,
      skill_most_similar_name_3: str,
      skill_most_similar_rating_3: float,
      skill_most_similar_name_4: str,
      skill_most_similar_rating_4: float,
      card_image: str
    }
  }
};

export default getFunc(
  "Style Comps",
  "team_style_comps",
  "Style Comps",
  body,
  "team"
);
