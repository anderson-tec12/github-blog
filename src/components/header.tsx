import { HeaderContainer } from './styles';
import Image from '../assets/Cover.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Image} alt="" />
    </HeaderContainer>
  )
}