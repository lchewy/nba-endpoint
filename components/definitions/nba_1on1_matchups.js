const str = { type: "string" };
const int32 = { type: "integer", format: "int32" };

export default {
  type: "array",
  items: {
    type: "object",
    properties: {
      game_ID: str,
      total_possessions: int32,
      text_description: str,
      FGA: str,
      FGM: str,
      turnovers: str,
      pts_scored: str,
      rating: str,
      fense: str
    }
  }
};