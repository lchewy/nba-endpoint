const str = { type: "string" };
const int32 = { type: "integer", format: "int32" };

export const easiest_matchup_offense = {
  // type: "array",
  // items: {
  type: "object",
  properties: {
    easiest_matchup_offense_1: str,
    easiest_matchup_offense_2: str,
    easiest_matchup_offense_3: str,
    player_ID: str,
    graphic_title: str,
    image_id: int32
    // card_image: str
    // }
  }
};

export const toughest_matchup_offense = {
  // type: "array",
  // items: {
  type: "object",
  properties: {
    toughest_matchup_offense_1: str,
    toughest_matchup_offense_2: str,
    toughest_matchup_offense_3: str,
    player_ID: str,
    graphic_title: str,
    image_id: int32
    // card_image: str
    // }
  }
};

export const easiest_matchup_defense = {
  // type: "array",
  // items: {
  type: "object",
  properties: {
    easiest_matchup_defense_1: str,
    easiest_matchup_defense_2: str,
    easiest_matchup_defense_3: str,
    player_ID: str,
    graphic_title: str,
    image_id: int32
    // card_image: str
    // }
  }
};

export const toughest_matchup_defense = {
  // type: "array",
  // items: {
  type: "object",
  properties: {
    toughest_matchup_defense_1: str,
    toughest_matchup_defense_2: str,
    toughest_matchup_defense_3: str,
    player_ID: str,
    graphic_title: str,
    image_id: int32
    // card_image: str
    // }
  }
};
