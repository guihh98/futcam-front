import {HomeContainer, RouterWrapper} from "./styles";
import {Outlet} from "react-router-dom";
import {Header} from "../../domain/header";
import { Footer } from "../../domain/footer";
export interface HomeProps {

}

export const Home = (): JSX.Element => {
  return (
    <HomeContainer>
        <Header />
        <RouterWrapper>
            <Outlet />
        </RouterWrapper>
        <Footer />
    </HomeContainer>
  )
}
