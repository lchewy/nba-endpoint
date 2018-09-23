const str = { type: "string" };
const int32 = { type: "integer", format: "int32" };

export default {
  type: "object",
  properties: {
    graphic_title:str,
team_ID:str,
game_ID:str,
player_ID:str,
opponent_name:str,
field_goals_made:int32,
field_goals_att:int32,
points:int32,
three_points_att:int32,
three_points_made:int32,
image_id:int32,
date:str,
date_string:str,
  }
};
