import { getFunc } from "../utils/getFn";
import nba_shot_taking_making from "../../definitions/nba_shot_taking_making";
// const str = { type: "string" };
// const int32 = { type: "integer", format: "int32" };
// const float = { type: "number", format: "float" };

// const body = {
//   type: "array",
//   items: {
//     type: "object",
//     properties: {
//       graphic_title: str,
//       game_ID: str,
//       home: {
//         type: "object",
//         properties: {
//           name: str,
//           team_ID: str,
//           score_info: int32,
//           shot_taking_text: str,
//           shot_taking_value: str,
//           shot_making_text: str,
//           shot_making_value: str,
//           actual_expected: str
//         }
//       },
//       away: {
//         type: "object",
//         properties: {
//           name: str,
//           team_ID: str,
//           score_info: int32,
//           shot_taking_text: str,
//           shot_taking_value: str,
//           shot_making_text: str,
//           shot_making_value: str,
//           actual_expected: str
//         }
//       },
//       game: {
//         type: "object",
//         properties: {
//           win_frequency_text: str,
//           win_frequency_value: {
//             type: "array",
//             items: { type: float }
//           }
//         }
//       }
//     }
//   }
// };

export default getFunc(
  "a team's shot taking stats during away/home games",
  "team_nba_shot_taking_making",
  "nba_shot_taking_making",
  nba_shot_taking_making,
  "team"
);
