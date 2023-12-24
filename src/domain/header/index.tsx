import React from 'react'
import {ButtonsWrapper, HeaderContainer, Logo, LogoLetter} from "./styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faVideo} from "@fortawesome/free-solid-svg-icons";
import {BaseButton} from "../../components/button";
import {useNavigate} from "react-router-dom";
import {ROUTES} from '../../sharedKernel/constants/routes'
export interface HeaderProps {

}

export const Header = (): JSX.Element => {
    const navigate = useNavigate()

    const getSettingsContent = (): JSX.Element => {
        return <FontAwesomeIcon icon={faGear} style={{color: "#ffffff"}} size={"2x"} />
    }

    return (
    <HeaderContainer>
        <Logo onClick={() => {
            navigate(ROUTES.HOTSITE.ROOT)
        }}>
            <LogoLetter>VAR</LogoLetter>
            <FontAwesomeIcon icon={faVideo} style={{color: "#ffffff"}} size={"3x"} />
        </Logo>
        <ButtonsWrapper>
            <BaseButton variant={"outline-light"} size={"sm"} content={getSettingsContent()} onClick={() => navigate(ROUTES.HOTSITE.SETTINGS.LOGIN)} />
        </ButtonsWrapper>
    </HeaderContainer>
  )
}
