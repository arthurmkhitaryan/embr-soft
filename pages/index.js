//import styles
import * as S from '../styles/Home';
//import components
import Banner from "../components/Banner/Banner";
import BannerInfo from "../components/BannerInfo/BannerInfo";


const Home = () => {
  return <S.HomeWrapper>
     <Banner/>
      <S.InfoContainer>
          <BannerInfo/>
      </S.InfoContainer>

  </S.HomeWrapper>;
}

export default Home;
