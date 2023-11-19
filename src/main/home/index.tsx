import React from 'react'
import {HomeContainer, Title} from "./styles";
import {ButtonStyled} from "../../components/buttonStyled";
import {ROUTES} from "../../sharedKernel/constants/routes";
import {useNavigate} from "react-router-dom";
export interface HomeProps {

}

export const Home = (): JSX.Element => {
    const navigate = useNavigate()
  return (
    <HomeContainer>
        <Title>Bem vindo(a)!</Title>
        <ButtonStyled
            content='Começar'
            onClick={() => {
                navigate(ROUTES.HOTSITE.REGISTER)
            }}
        />
    </HomeContainer>
  )
}
