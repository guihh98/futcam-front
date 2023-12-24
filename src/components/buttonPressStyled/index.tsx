import { ButtonStyle } from './styles';

export interface ButtonPressProps {
  content: string | JSX.Element
  mainColor?: string
  pressColor?: string
  shandowColor?: string
  fontSize?: string
  className?: string
  onClick?: () => void
}

export const ButtonPress = ({content, mainColor, pressColor, shandowColor, fontSize, className, onClick}: ButtonPressProps): JSX.Element => {
  return (
    <ButtonStyle
      onClick={onClick}
      className={className}
      mainColor={mainColor}
      pressColor={pressColor}
      shandowColor={shandowColor}
      fontSize={fontSize}
    >
      <span>{content}</span>
    </ButtonStyle>
  );
}