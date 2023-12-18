import { ButtonPress } from '../../components/buttonPressStyled';
import { FooterContainer, Text } from './styles';
import { useSelector } from 'react-redux';

export interface FooterProps {

}

export const Footer = (): JSX.Element => {
  const phoneNumber = useSelector((state: any) => state.startForm.phoneNumber)
  const userName = useSelector((state: any) => state.startForm.name)
  return (
    <FooterContainer>
      <Text>
        <p>WhatsApp: {phoneNumber} - {userName}</p>
      </Text>
      <ButtonPress content='ENCERRAR PARTIDA' className='m-0' mainColor='#a00c0c' pressColor='#d81020' shandowColor='#490a0a' fontSize='1rem' />
    </FooterContainer>
    
  );
}