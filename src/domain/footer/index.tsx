import { useNavigate } from 'react-router-dom';
import { ButtonPress } from '../../components/buttonPressStyled';
import { resetMatch } from '../../store/slices/match';
import { FooterContainer, Text } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../../sharedKernel/constants/routes';
import { reset } from '../../store/slices/startForm';

export interface FooterProps {

}

export const Footer = (): JSX.Element => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const phoneNumber = useSelector((state: any) => state.startForm.phoneNumber)
  const userName = useSelector((state: any) => state.startForm.name)
  const isOngoing = useSelector((state: any) => state.match.isOngoing)

  const endMatch = () => {
    dispatch(reset())
    dispatch(resetMatch())
    navigate(ROUTES.HOTSITE.ROOT)
  }

  if(!isOngoing){
    return <FooterContainer />
  }

  return (
    <FooterContainer>
      <Text>
        <p>WhatsApp: {phoneNumber} - {userName}</p>
      </Text>
      <ButtonPress content='ENCERRAR PARTIDA' className='m-0' mainColor='#a00c0c' pressColor='#d81020' shandowColor='#490a0a' fontSize='1rem' onClick={endMatch} />
    </FooterContainer>
    
  );
}