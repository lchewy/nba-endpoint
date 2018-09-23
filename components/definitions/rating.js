const int32 = { type: "integer", format: "int32" };
const str = { type: "string" };

export default {
  type: "array",
  items: {
    type: "object",
    properties: {
      "1_on_1_offense": int32,
      scoring: int32,
      handling: int32,
      shooting: int32,
      finish_at_rim: int32,
      attacking: int32,
      passing: int32,
      wing_game: int32,
      offensive_boards_putbacks: int32,
      transition_game: int32,
      post_playmaking: int32,
      screen_setting_game: int32,
      card_image: str,
      fense: str,
      help_rotations: int32,
      closeouts: int32,
      "1_on_1_defense": int32,
      perimeter_shot_contesting: int32,
      off_screen_defense: int32,
      post_defense: int32,
      defending_drives: int32,
      ball_screen_handler_defense: int32,
      steals: int32,
      ball_screener_defense: int32,
      defensive_boards: int32,
      rim_protection: int32,
      image_id: int32,
      date:str,
      date_string:str
      // test:{
      //   type:"object",
      //   properties:{
      //     _id: str,
      //     game_IDs: {
      //       type:"array",
      //       items: {nullable: true} // NEED TO KEEP TRACK
      //     },

      //     season: int32,
      //     card_type: str,
      //     custom_data: {
      //       type:"object",
      //       properties:{
      //         display_text: str,
      //         team_ID: str,
      //         player_name: str,
      //         sub_skills: {
      //           type:"array",
      //           items:{
      //             type:"object",
      //             properties:{
      //               rating: int32,
      //               name: str
      //             }
      //           }
      //         },
      //         fense: str,
      //         player_ID: str,
      //         position: str,
      //         team_name: str,
      //         overall: int32,
      //         team_abbr: str,

      //       }
      //     },
      //     sport: str,
      //     date_string: str,
      //     date: str


      //   }
      // }
    }
  }
};
