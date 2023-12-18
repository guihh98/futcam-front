import { ButtonStyle } from "./styles";

export interface ButtonPressProps {
  content: string | JSX.Element
  mainColor?: string
  pressColor?: string
  shadowColor?: string
  fontSize?: string
}

export const ButtonPress = ({content, mainColor, pressColor, shadowColor, fontSize}: ButtonPressProps): JSX.Element => {
  return (
    <ButtonStyle mainColor={mainColor} pressColor={pressColor} shadowColor={shadowColor} fontSize={fontSize}>
        <a href="#">{content}</a>
    </ButtonStyle>
  );
}