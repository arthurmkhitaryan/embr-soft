//import styles
import * as S from './MainLayout.styles';

// import all components
import { Header } from "../Header";
import { Footer } from "../Footer";

export const MainLayout = ({ children }) => {
  return (
    <S.MainLayoutWrapper>
      <Header />
       { children }
      <Footer />
    </S.MainLayoutWrapper>
  );
}