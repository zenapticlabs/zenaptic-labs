import { TextRoll } from "./MotionPrimitivesComponents/text-roll";
import React from "react";

function TextRollAnimation(props) {
  let Text = props.Text;
  let classes = props.classes;
  return <TextRoll className={classes}>{Text}</TextRoll>;
}

export default TextRollAnimation;
