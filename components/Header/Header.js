import * as S from './Header.styles';

//Logo import
import LogoSvg from  '../../public/assets/images/logo.svg'
//Components
import {Navbar} from "../Navbar";
import PolygonArrowSvg from "../icons/PolygonArrowSvg";


export const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderLogo>
        <img src={LogoSvg.src}/>
      </S.HeaderLogo>
        <S.HeaderNavWrapper>
            <Navbar />
        </S.HeaderNavWrapper>
        <S.LanguageWrapper>
            <p>Eng</p>
            <PolygonArrowSvg/>
        </S.LanguageWrapper>

    </S.HeaderWrapper>
  );
}