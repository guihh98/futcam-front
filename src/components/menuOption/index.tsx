import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonContainer } from "./styles"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

export interface MenuOptionProps {
    optionText: string,
    icon: IconDefinition,
    color: string,
    onClick?: () => void,
}

export const MenuOption = ({optionText, icon, color, onClick}: MenuOptionProps): JSX.Element => {
    return (
        <ButtonContainer onClick={onClick}>
             <FontAwesomeIcon icon={icon} style={{color}} size={"2x"} />
             <p className="mb-0 p-2 text-end" style={{color}}>{optionText}</p>
        </ButtonContainer>
    )
}