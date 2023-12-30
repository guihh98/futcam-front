import { ButtonStyle } from './styles';

export interface ButtonPressProps {
  content: string | JSX.Element
  mainColor?: string
  pressColor?: string
  shadowColor?: string
  fontSize?: string
  className?: string
  onClick?: () => void
}

export const ButtonPress = ({content, mainColor, pressColor, shadowColor, fontSize,className, onClick}: ButtonPressProps): JSX.Element => {
  return (
    <ButtonStyle
      onClick={onClick}
      className={className}
      maincolor={mainColor}
      presscolor={pressColor}
      shadowcolor={shadowColor}
      fontSize={fontSize}
    >
      <span>{content}</span>
    </ButtonStyle>
  );
}