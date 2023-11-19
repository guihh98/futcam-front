import React from 'react'
import {HomeContainer, RouterWrapper} from "./styles";
import {Outlet} from "react-router-dom";
import {Header} from "../../domain/header";
export interface HomeProps {

}

export const Home = (): JSX.Element => {
  return (
    <HomeContainer>
        <Header />
        <RouterWrapper>
            <Outlet />
        </RouterWrapper>
    </HomeContainer>
  )
}
