const str = { type: "string" };
const float = { type: "number", format: "float" };

export default {
  type: "array",
  items: {
    type: "object",
    properties: {
      display_text: str,
      defense_skill_most_similar_name_1: str,
      defense_skill_most_similar_rating_1: float,
      defense_skill_most_similar_name_2: str,
      defense_skill_most_similar_rating_2: float,
      defense_skill_most_similar_name_3: str,
      defense_skill_most_similar_rating_3: float,
      defense_skill_most_similar_name_4: str,
      defense_skill_most_similar_rating_4: float,
      card_image: str
    }
  }
};
