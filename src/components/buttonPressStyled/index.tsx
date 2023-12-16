import { ButtonStyle } from "./styles";

export interface ButtonPressProps {
  content: string | JSX.Element
  mainColor?: string
  pressColor?: string
  shandowColor?: string
  fontSize?: string
}

export const ButtonPress = ({content, mainColor, pressColor, shandowColor, fontSize}: ButtonPressProps): JSX.Element => {
  return (
    <ButtonStyle mainColor={mainColor} pressColor={pressColor} shandowColor={shandowColor} fontSize={fontSize}>
        <a href="#">{content}</a>
    </ButtonStyle>
  );
}