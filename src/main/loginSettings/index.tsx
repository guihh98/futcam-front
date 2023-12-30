import React, {useState} from 'react'
import {Card, Form} from "react-bootstrap";
import {FormWrapper, FormTitle} from "../startForm/styles";
import {ButtonStyled} from "../../components/buttonStyled";
import {ROUTES} from "../../sharedKernel/constants/routes";
import {useNavigate} from "react-router-dom";
import {FormFields, FormState} from "./contracts";
import { MenuOption } from '../../components/menuOption';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { BackButton } from './styles';
export const LoginSettings = (): JSX.Element => {
    const navigate = useNavigate()

    const [loginForm, setLoginForm] = useState<FormState>({
        fields: {
            login: {
                value: '',
                required: true,
                isValid: false,
                regex: '',
                error: '',
                validated: false
            },
            password: {
                value: '',
                required: true,
                isValid: false,
                regex: '',
                error: '',
                validated: false
            },
        }
    })
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formValid = Object.values(loginForm.fields).every(field => field.isValid === true)
        if (!formValid){
            return 
        }
        navigate(ROUTES.HOTSITE.SETTINGS.MAINPAGE)
    }
    const handleInputChange = (fieldName: string, value:string, regex: RegExp):void => {
        setLoginForm((prevForm) => ({
            ...prevForm,
            fields: {
                ...prevForm.fields,
                [fieldName]: {
                    ...prevForm.fields[fieldName as keyof FormFields],
                    value,
                    isValid: validateField(value, regex),
                    validated: true
                },
            },
        }))
    }
    const validateField = (value: string, regex: RegExp):boolean => {
        return regex.test(value);
    }
        return (
            <div className=' w-100 h-100 d-flex flex-column'>
                <FormWrapper>
                    <Card
                        bg='light'
                        className='w-50'
                        >
                        <FormTitle className='text-center'>Área exclusiva para administradores</FormTitle>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className='mb-3' controlId='formBasicName'>
                                    <Form.Label className='fw-bold'>Digite seu email</Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='login'
                                        placeholder='E-mail' 
                                        value={loginForm.fields.login.value}
                                        isValid={loginForm.fields.login.isValid}
                                        isInvalid={!loginForm.fields.login.isValid && loginForm.fields.login.validated}
                                        onChange={(e) => handleInputChange(e.target.name,e.target.value, /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)}
                                        onBlur={(e) => handleInputChange(e.target.name,e.target.value, /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)}
                                        />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='formBasicTeamName'>
                                    <Form.Label className='fw-bold'>Digite sua senha</Form.Label>
                                    <Form.Control 
                                        type='password' 
                                        name='password'
                                        placeholder='Senha'
                                        value={loginForm.fields.password.value}
                                        isValid={loginForm.fields.password.isValid}
                                        isInvalid={!loginForm.fields.password.isValid && loginForm.fields.password.validated}
                                        onChange={(e) => handleInputChange(e.target.name,e.target.value, /^.{5,}$/)}
                                        onBlur={(e) => handleInputChange(e.target.name,e.target.value, /^.{5,}$/)}
                                        />
                                </Form.Group>
                                <div className='w-100 d-flex justify-content-center align-items-center mt-5 mb-3 '>
                                    <ButtonStyled
                                        content='Entrar'
                                        />
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </FormWrapper>
                <BackButton className='ml-1' onClick={() => window.history.back()}>
                    <MenuOption optionText="Voltar" color="white" icon={faBackward}/>
                </BackButton>
            </div>
        )
}
