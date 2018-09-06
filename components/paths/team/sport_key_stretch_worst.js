// NOT DONE YET !!!!!!!

import getFunc from "../utils/getFn";

const body = {
  type:"array",
  items:{
    type: "object",

    properties: {
      team_worst_stretch_1: { type: "string" },
      team_worst_stretch_2: { type: "string" },
      team_worst_stretch_3: { type: "string" },
      team_worst_stretch_4: { type: "string" },
      team_worst_stretch_5: { type: "string" },
      text_description: { type: "array", items: { type: "string" } },
      card_image: { type: "string" }
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
