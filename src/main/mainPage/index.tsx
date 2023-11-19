import React from 'react'
import {CameraContainer, Container, Row} from './styles'

export interface MainPageProps {

}

export const MainPage = (): JSX.Element => {
  return (
    <Container>
      Nome da pelada que ta jogando
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
        <Row>
            <CameraContainer>
                <video muted autoPlay controls className='w-100 h-100'>
                    <source src="https://www.earthcam.com/d42e510b-7c91-49dc-8dce-b0db4f15ce4a" type="video/mp4" />
                    Seu navegador não suporta vídeo HTML5.
                </video>
            </CameraContainer>
            <CameraContainer>
                <video muted autoPlay controls className='w-100 h-100'>
                    <source src="https://www.earthcam.com/d42e510b-7c91-49dc-8dce-b0db4f15ce4a" type="video/mp4" />
                    Seu navegador não suporta vídeo HTML5.
                </video>
            </CameraContainer>
        </Row>
    </Container>
  )
}
