import { FooterContainer } from './styles';
import { useSelector } from 'react-redux';

export interface FooterProps {

}

export const Footer = (): JSX.Element => {
    const phoneNumber = useSelector((state: any) => state.startForm.phoneNumber)
    const userName = useSelector((state: any) => state.startForm.name)
  return (
    <FooterContainer>
      <p>WhatsApp: {phoneNumber} - {userName}</p>
    </FooterContainer>
  );
}