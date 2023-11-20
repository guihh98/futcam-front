import React, {useState} from 'react'
import {Alert, Card, Form} from "react-bootstrap";
import {FormWrapper} from "./styles";
import {ButtonStyled} from "../../components/buttonStyled";
import {ROUTES} from "../../sharedKernel/constants/routes";
import {useNavigate} from "react-router-dom";
import {FormFields, FormState} from "./contracts";
import InputMask from 'react-input-mask';
export const Registration = (): JSX.Element => {
    const navigate = useNavigate()
    const [form, setForm] = useState<FormState>({
        fields: {
            name: {
                value: '',
                required: true,
                isValid: false,
                regex: '',
                error: '',
                validated: false
            },
            teamName: {
                value: '',
                required: true,
                isValid: false,
                regex: '',
                error: '',
                validated: false
            },
            whatsApp: {
                value: '',
                required: true,
                isValid: false,
                regex: '',
                error: '',
                validated: false
            }
        }
    })
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        navigate(ROUTES.HUB.CAMERAS)
    }
    const handleInputChange = (fieldName: string, value:string):void => {
        setForm((prevForm) => ({
            ...prevForm,
            fields: {
                ...prevForm.fields,
                [fieldName]: {
                    ...prevForm.fields[fieldName as keyof FormFields],
                    value,
                    isValid: validateField(fieldName, value),
                    validated: true
                },
            },
        }))
    }

    const validateField = (fieldName: string, value: string):boolean => {
        return value.trim() !== ''
    }
        return (
      <FormWrapper>
          <Card
              bg='light'
              className='w-50'
          >
              <Card.Body>
                  <Form onSubmit={handleSubmit}>
                      <Form.Group className='mb-3' controlId='formBasicName'>
                          <Form.Label className='fw-bold'>Digite seu nome</Form.Label>
                          <Form.Control 
                              type='text'
                              name='name'
                              placeholder='Nome' 
                              value={form.fields.name.value}
                              isValid={form.fields.name.isValid}
                              isInvalid={!form.fields.name.isValid && form.fields.name.validated}
                              onChange={(e) => handleInputChange(e.target.name,e.target.value)}
                              onBlur={(e) => handleInputChange(e.target.name,e.target.value)}
                          />
                          {/*{errors.name && <Alert variant='danger'>{errors.name}</Alert>}*/}
                      </Form.Group>
                      <Form.Group className='mb-3' controlId='formBasicTeamName'>
                          <Form.Label className='fw-bold'>Digite o nome da pelada</Form.Label>
                          <Form.Control 
                              type='text' 
                              name='teamName'
                              placeholder='Nome da pelada'
                              value={form.fields.teamName.value}
                              isValid={form.fields.teamName.isValid}
                              isInvalid={!form.fields.teamName.isValid && form.fields.teamName.validated}
                              onChange={(e) => handleInputChange(e.target.name,e.target.value)}
                              onBlur={(e) => handleInputChange(e.target.name,e.target.value)}
                          />
                      </Form.Group>
                      <Form.Group className='mb-3' controlId='formBasicWhatsApp'>
                          <Form.Label className='fw-bold'>Digite o seu WhatsApp</Form.Label>
                          <InputMask
                              mask='(99) 99999-9999'
                              maskChar='_'
                              type='tel'
                              name='whatsApp'
                              placeholder='WhatsApp'
                              value={form.fields.whatsApp.value}
                              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                              onBlur={(e) => handleInputChange(e.target.name, e.target.value)}
                              className={`form-control ${(form.fields.whatsApp.isValid) ? 'is-valid' : ''} ${(!form.fields.whatsApp.isValid && form.fields.whatsApp.validated) ? 'is-invalid' : ''}`}
                          />
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
