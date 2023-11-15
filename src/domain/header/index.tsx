import React from 'react'
import {ButtonsWrapper, HeaderContainer, Logo, LogoLetter} from "./styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faVideo} from "@fortawesome/free-solid-svg-icons";
import {BaseButton} from "../../components/button";

export interface HeaderProps {

}

const configAction = () => {
    console.log('teste')
}

const getSettingsContent = (): JSX.Element => {
    return <FontAwesomeIcon icon={faGear} style={{color: "#ffffff"}} size={"2x"} />
}
export const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
        <Logo>
            <LogoLetter>Fut</LogoLetter>
            <FontAwesomeIcon icon={faVideo} style={{color: "#ffffff"}} size={"3x"} />
        </Logo>
        <ButtonsWrapper>
            <BaseButton variant={"outline-light"} size={"sm"} content={getSettingsContent()} onClick={configAction} />
        </ButtonsWrapper>
    </HeaderContainer>
  )
}
