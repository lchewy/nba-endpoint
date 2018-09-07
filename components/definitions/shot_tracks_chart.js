const str = { type: "string" };
const int32 = { type: "integer", format: "int32" };

export default {
  type: "object",
  properties: {
    graphic_title: str,
    team_ID: str,
    game_ID: str,
    opponent_name: str,
    PTS: int32,
    FGM: int32,
    FGA: int32,
    "3PA": int32,
    "3PM": int32,
    shot_tracks: { type: "array", items:str }, // NO ITEMS FOR ARRAY AVAILABLE
    card_image: str
  }
};
