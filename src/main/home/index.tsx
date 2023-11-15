import React from 'react'
import {HomeContainer} from "./styles";
import {Button} from 'react-bootstrap'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export interface HomeProps {

}

export const Home = (): JSX.Element => {
  return (
    <HomeContainer>
        Home page
    </HomeContainer>
  )
}
