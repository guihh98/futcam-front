import React from 'react'
import {Card, Form} from "react-bootstrap";
import {FormWrapper} from "./styles";
import {ButtonStyled} from "../../components/buttonStyled";
import {ROUTES} from "../../sharedKernel/constants/routes";
import {useNavigate} from "react-router-dom";

export interface RegistrationProps {

}

export const Registration = (): JSX.Element => {
    const navigate = useNavigate()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(ROUTES.HUB.CAMERAS)
    }
        return (
      <FormWrapper>
          <Card
              bg='light'
              className='w-50'
          >
              <Card.Body>
                  <Form onSubmit={handleSubmit}>
                      <Form.Group className='mb-3' controlId='formBasicEmail'>
                          <Form.Label>Digite seu nome</Form.Label>
                          <Form.Control type='text' placeholder='Nome' />
                      </Form.Group>
                      <Form.Group className='mb-3' controlId='formBasicEmail'>
                          <Form.Label>Digite o nome da pelada</Form.Label>
                          <Form.Control type='text' placeholder='Nome da pelada' />
                      </Form.Group>
                      <Form.Group className='mb-3' controlId='formBasicEmail'>
                          <Form.Label>Digite o seu WhatsApp</Form.Label>
                          <Form.Control type='tel' placeholder='WhatsApp' />
                      </Form.Group>
                      <div className='w-100 d-flex justify-content-center align-items-center mt-5 mb-3 '>
                          <ButtonStyled
                              content='Iniciar partida'
                          />
                      </div>
                  </Form>
              </Card.Body>
          </Card>
      </FormWrapper>
  )
}
