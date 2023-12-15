import React from 'react'
import {Button} from "react-bootstrap";
import {ButtonContainer} from "./styles";

export interface BaseButtonProps {
    variant: string | 'primary'| 'secondary'| 'success'| 'danger'| 'warning'| 'info'| 'dark'| 'light'| 'link' | 
        'outline-primary'| 'outline-secondary'| 'outline-success'| 'outline-danger'| 'outline-warning'| 'outline-info' | 
        'outline-dark'| 'outline-light'
    size: 'sm' | 'lg' 
    className?: string
    content: string | JSX.Element
    disabled?: boolean
    onClick: () => void
}

export const BaseButton = ({variant, size, className, content, disabled = false, onClick}: BaseButtonProps): JSX.Element => {
  return (
    <ButtonContainer>
      <Button
        variant={variant}
        size={size}
        className={className}
        disabled={disabled}
        onClick={onClick}
      >
          {content}    
      </Button>
    </ButtonContainer>
  )
}
