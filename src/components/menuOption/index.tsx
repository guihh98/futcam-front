import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonContainer } from "./styles"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

export interface MenuOptionProps {
    optionText: string,
    icon: IconDefinition,
}

export const MenuOption = ({optionText, icon}: MenuOptionProps): JSX.Element => {
    return (
        <ButtonContainer>
             <FontAwesomeIcon icon={icon} style={{color: "#ffffff"}} size={"2x"} />
             <p className="mb-0 p-2 text-end" >{optionText}</p>
        </ButtonContainer>
    )
}