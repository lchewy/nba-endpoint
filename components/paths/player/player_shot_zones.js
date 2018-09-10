import {getFunc} from "../utils/getFn";
import { zone_1, zone_2, zone_3, zone_4 } from "../../definitions/zones";

export const court_zone_1 = getFunc(
  "player shot zones",
  "player_shot_zones_1",
  "court_zones",
  zone_1,
  "player",
  "a player's shot attempts and percentages broken down to three zones"
);

export const court_zone_2 = getFunc(
  "player shot zones",
  "player_shot_zones_2",
  "court_zones",
  zone_2,
  "player",
  "a player's shot attempts and percentages broken down to five zones"
);

export const court_zone_3 = getFunc(
  "player shot zones",
  "player_shot_zones_3",
  "court_zones",
  zone_3,
  "player",
  "a player's shot attempts and percentages broken down to seven zones"
);

export const court_zone_4 = getFunc(
  "player shot zones",
  "player_shot_zones_4",
  "court_zones",
  zone_4,
  "player",
  "a player's shot attempts and percentages broken down to fourteen zones"
);
