import React from 'react'
import {Title, WelcomeContainer} from "./styles";
import {ButtonStyled} from "../../components/buttonStyled";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../sharedKernel/constants/routes";

export interface WelcomeProps {

}

export const Welcome = (): JSX.Element => {
  const navigate = useNavigate()
    return (
      <WelcomeContainer>
      <Title>Bem vindo(a)!</Title>
        <ButtonStyled
            content='Começar'
            onClick={() => {
                navigate(ROUTES.HOTSITE.REGISTER)
            }}
        />
      </WelcomeContainer>
  )
}
