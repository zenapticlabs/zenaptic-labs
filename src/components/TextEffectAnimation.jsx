import { TextEffect } from './MotionPrimitivesComponents/text-effect.tsx';

export default function TextEffectPerChar(props) {
    let Text=props.Text
    let Classes =props.Classes
    let component=props.component
  
  return (
    <TextEffect per='char' preset='fade'  className={Classes} >
   {Text}
    </TextEffect>
  );
}