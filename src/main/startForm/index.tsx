import React, {useState} from 'react'
import {Card, Form} from "react-bootstrap";
import {FormWrapper} from "./styles";
import {ButtonStyled} from "../../components/buttonStyled";
import {ROUTES} from "../../sharedKernel/constants/routes";
import {useNavigate} from "react-router-dom";
import {FormFields, FormState} from "./contracts";
import InputMask from 'react-input-mask';
import { useDispatch } from 'react-redux';
import { update } from '../../store/slices/startForm';
import { updateMatch } from '../../store/slices/match';
export const Registration = (): JSX.Element => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

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
        const formValid = Object.values(form.fields).every(field => field.isValid === true)
        if (!formValid){
            return 
        }
        dispatch(update({name: form.fields.name.value, matchName: form.fields.teamName.value, phoneNumber: form.fields.whatsApp.value}))
        dispatch(updateMatch({isOngoing: true}))
        navigate(ROUTES.HUB.CAMERAS)
    }
    const handleInputChange = (fieldName: string, value:string, regex: RegExp):void => {
        setForm((prevForm) => ({
            ...prevForm,
            fields: {
                ...prevForm.fields,
                [fieldName]: {
                    ...prevForm.fields[fieldName as keyof FormFields],
                    value,
                    isValid: validateField(fieldName, value, regex),
                    validated: true
                },
            },
        }))
    }
    const validateField = (fieldName: string, value: string, regex: RegExp):boolean => {
        return regex.test(value);
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
                              onChange={(e) => handleInputChange(e.target.name,e.target.value, /[a-zA-Z]/)}
                              onBlur={(e) => handleInputChange(e.target.name,e.target.value, /[a-zA-Z]/)}
                          />
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
                              onChange={(e) => handleInputChange(e.target.name,e.target.value, /[a-zA-Z]/)}
                              onBlur={(e) => handleInputChange(e.target.name,e.target.value, /[a-zA-Z]/)}
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
                              onChange={(e) => handleInputChange(e.target.name, e.target.value, /^\(\d{2}\) \d{5}-\d{4}$/)}
                              onBlur={(e) => handleInputChange(e.target.name, e.target.value, /^\(\d{2}\) \d{5}-\d{4}$/)}
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
