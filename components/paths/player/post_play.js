import { getFunc } from "../utils/getFn";
// import post_play from "../../definitions/post_play";
import { post_play_location } from "../../definitions/common";

const body = {
  type: "object",
  properties: post_play_location
};

export default getFunc(
  "player's post play",
  "post_play_location",
  "post_play_location",
  body,
  "player",
  "a players post play abilities to the left/right"
);
