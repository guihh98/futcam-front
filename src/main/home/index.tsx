import React from 'react'
import {HomeContainer, Title} from "./styles";
import {ButtonStyled} from "../../components/buttonStyled";
export interface HomeProps {

}

export const Home = (): JSX.Element => {
  return (
    <HomeContainer>
        <Title>Bem vindo(a)!</Title>
        <ButtonStyled
            content='Começar'
        />
    </HomeContainer>
  )
}
