import React from 'react'
import {ButtonContainer} from "./styles";

export interface ButtonStyledProps {
    variant?: string | 'primary'| 'secondary'| 'success'| 'danger'| 'warning'| 'info'| 'dark'| 'light'| 'link' |
        'outline-primary'| 'outline-secondary'| 'outline-success'| 'outline-danger'| 'outline-warning'| 'outline-info' |
        'outline-dark'| 'outline-light'
    size?: 'sm' | 'lg'
    className?: string
    content: string | JSX.Element
    disabled?: boolean
    onClick?: () => void
}

export const ButtonStyled = ({variant, size, className, content, disabled = false, onClick}: ButtonStyledProps): JSX.Element => {
    return (
        <ButtonContainer>
            <button
                className={className}
                disabled={disabled}
                onClick={onClick}
            >
                <a>{content}</a>
            </button>
        </ButtonContainer>
    )
}
