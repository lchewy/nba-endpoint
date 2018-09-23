export const str = { type: "string" };
export const float = { type: "number", format: "float" };
export const int32 = { type: "integer", format: "int32" };
export const bool = { type: "boolean" };

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
  image_id: int32,
  date: str,
  date_string: str
};

export const shot_tracks_chart_sub = {
  type: "array",
  items: {
    type: "object",
    properties: {
      game_clock: float,
      shot_clock: float,
      shot_points: int32,
      shot_points_if_made: int32,
      quarter: int32,
      foul: bool,
      outcome: str,
      is_fastbreak: bool,
      x_y_coords: {
        type: "object",
        properties: {
          player_location: { type: "array", items: float },
          on_ball: { type: "array", items: float },
          ball_location: { type: "array", items: float }
        }
      }
    }
  }
};

export const shot_tracks = {
  on_ball_pct: float,
  off_ball_pct: float,
  on_ball: float,
  off_ball: float,
  shooting_plays: { type: "integer", format: "int32" },
  image_id: int32,
  date: str,
  date_string: str
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
  image_id: float,
  date: str,
  date_string: str
};

export const style_comps = {
  display_text: str,
  player_ID: str,
  style_most_similar_name_1: str,
  style_most_similar_rating_1: float,
  style_most_similar_name_2: str,
  style_most_similar_rating_2: float,
  style_most_similar_name_3: str,
  style_most_similar_rating_3: float,
  style_most_similar_name_4: str,
  style_most_similar_rating_4: float,
  image_id: int32,
  date: str,
  date_string: str
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
  image_id: int32,
  date: str,
  date_string: str
};

export const paint_drive_location = {
  player_ID: str,
  graphic_title: str,
  paint_drive_location_left: int32,
  per_game_created_left: float,
  paint_drive_location_right: int32,
  points_per_game_created_right: float,
  total_paint_drives: int32,
  image_id: int32,
  date: str,
  date_string: str
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

export const three_matchups = {
  type: "object",
  properties: {
    player_1_id: str,
    player_1_name: str,
    player_2_id: str,
    player_2_name: str,
    player_3_id: str,
    player_3_name: str,
    player_ID: str,
    graphic_title: str,
    image_id: int32,
    date: { nullable: true },
    date_string: str
  }
};

export const most_favorable_stretch = {
  type: "array",
  items: {
    type: "object",
    properties: {
      team_most_favorable_stretch_1_id: str,
      team_most_favorable_stretch_1_name: str,
      team_most_favorable_stretch_2_id: str,
      team_most_favorable_stretch_2_name: str,
      team_most_favorable_stretch_3_id: str,
      team_most_favorable_stretch_3_name: str,
      team_most_favorable_stretch_4_id: str,
      team_most_favorable_stretch_4_name: str,
      team_most_favorable_stretch_5_id: str,
      team_most_favorable_stretch_5_name: str,
      text_description: str,
      total_plus_minus: str,
      avg_per_game: str,
      lineup_avg_per_game: str,
      lineup_plus_minus: str,
      image_id: int32,
      date: str,
      date_string: str
    }
  }
};

export const least_favorable_stretch = {
  type: "array",
  items: {
    type: "object",
    properties: {
      team_least_favorable_stretch_1_id: str,
      team_least_favorable_stretch_1_name: str,
      team_least_favorable_stretch_2_id: str,
      team_least_favorable_stretch_2_name: str,
      team_least_favorable_stretch_3_id: str,
      team_least_favorable_stretch_3_name: str,
      team_least_favorable_stretch_4_id: str,
      team_least_favorable_stretch_4_name: str,
      team_least_favorable_stretch_5_id: str,
      team_least_favorable_stretch_5_name: str,
      text_description: str,
      total_plus_minus: str,
      avg_per_game: str,
      lineup_avg_per_game: str,
      lineup_plus_minus: str,
      image_id: int32,
      date: str,
      date_string: str
    }
  }
};
