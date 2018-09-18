export const str = { type: "string" };
export const float = { type: "number", format: "float" };
export const int32 = { type: "integer", format: "int32" };

export const shot_tracks_chart = {
  graphic_title: str,
  team_ID: str,
  game_ID: str,
  opponent_name: str,
  field_goals_made: int32,
  field_goals_att: int32,
  points: int32,
  three_points_att: int32,
  three_points_made: int32,
  image_id: int32
}

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
};

export const paint_drive_location = {
  player_ID: str,
  graphic_title: str,
  paint_drive_location_left: int32,
  per_game_created_left: float,
  paint_drive_location_right: int32,
  points_per_game_created_right: float,
  total_paint_drives: int32,
  image_id: int32
  // card_image: { type: "string" }
};

export const post_play_location = {
  player_ID: { type: "string" },
  graphic_title: { type: "string" },
  post_location_left: int32,
  post_points_per_game_created_left: float,
  post_location_right: int32,
  post_points_per_game_created_right: float,
  post_plays_count: int32,
  image_id: int32
};
