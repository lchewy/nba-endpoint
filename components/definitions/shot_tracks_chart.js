const str = { type: "string" };
const int32 = { type: "integer", format: "int32" };

export default {
  type: "object",
  properties: {
    graphic_title: str,
    team_ID: str,
    game_ID: str,
    opponent_name: str,
    field_goals_made: int32,
    field_goals_att: int32,
    points: int32,
    three_points_att: int32,
    three_points_made: int32,
    shot_tracks: { type: "array", items:str }, // NO ITEMS FOR ARRAY AVAILABLE

    // PTS: int32,
    // FGM: int32,
    // FGA: int32,
    // "3PA": int32,
    // "3PM": int32,
    // card_image: str
  }
};
