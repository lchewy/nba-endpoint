export const str = { type: "string" };
export const float = { type: "number", format: "float" };
export const int32 = { type: "integer", format: "int32" };

export const shot_tracks = {
  on_ball_pct: float,
  off_ball_pct: float,
  on_ball: float,
  off_ball: float,
  shooting_plays: { type: "integer", format: "int32" },
  image_id: int32
};

export const trends = {
  up_down: str,
  team_ID: str,
  player_downwards_trend_1: str,
  player_downwards_trend_2: str,
  player_downwards_trend_3: str,
  player_upwards_trend_1: str,
  player_upwards_trend_2: str,
  player_upwards_trend_3: str,
  image_id: float
};

export const style_comps = {
  display_text: str,
  player_ID: str,
  skill_most_similar_name_1: str,
  skill_most_similar_rating_1: float,
  skill_most_similar_name_2: str,
  skill_most_similar_rating_2: float,
  skill_most_similar_name_3: str,
  skill_most_similar_rating_3: float,
  skill_most_similar_name_4: str,
  skill_most_similar_rating_4: float,
  image_id: int32
};

export const similarities = {
  display_text: str,
  player_ID: str,
  defense_style_most_similar_name_1: str,
  defense_style_most_similar_rating_1: float,
  defense_style_most_similar_name_2: str,
  defense_style_most_similar_rating_2: float,
  defense_style_most_similar_name_3: str,
  defense_style_most_similar_rating_3: float,
  defense_style_most_similar_name_4: str,
  defense_style_most_similar_rating_4: float,
  offense_style_most_similar_name_1: str,
  offense_style_most_similar_rating_1: float,
  offense_style_most_similar_name_2: str,
  offense_style_most_similar_rating_2: float,
  offense_style_most_similar_name_3: str,
  offense_style_most_similar_rating_3: float,
  offense_style_most_similar_name_4: str,
  offense_style_most_similar_rating_4: float,
  image_id: int32
}