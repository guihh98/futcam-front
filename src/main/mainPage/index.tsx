import { useSelector } from 'react-redux'
import {CameraContainer, Container, Row, Title} from './styles'
import { ButtonPress } from '../../components/buttonPressStyled'

export interface MainPageProps {

}

export const MainPage = (): JSX.Element => {
const matchName = useSelector((state: any) => state.startForm.matchName)
  return (
    <Container>
        <Title>
            {matchName}
        </Title>
        <Row>
            <CameraContainer>
                <video muted autoPlay controls className='w-100 h-100'>
                    <source src="https://www.earthcam.com/d42e510b-7c91-49dc-8dce-b0db4f15ce4a" type="video/mp4" />
                    Seu navegador não suporta vídeo HTML5.
                </video>
            </CameraContainer>
            <CameraContainer className='pl-2'>
                <video muted autoPlay controls className='w-100 h-100'>
                    <source src="https://www.earthcam.com/d42e510b-7c91-49dc-8dce-b0db4f15ce4a" type="video/mp4" />
                    Seu navegador não suporta vídeo HTML5.
                </video>
            </CameraContainer>
        </Row>
        <Row className='align-items-center'>
            <ButtonPress content='GRAVAR' mainColor='#2BA026' pressColor='#25C61D' shadowColor='#155912' fontSize='7rem' />
        </Row>
    </Container>
  )
}
