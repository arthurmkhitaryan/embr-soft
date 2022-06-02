//import styles
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
`
export const HeaderLogo=styled.div`
  width: 245px;
  height: 48px;
`
export const HeaderNavWrapper=styled.div`
  max-width: 500px;
  width: 100%;
`
export const LanguageWrapper=styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
  p{
    font-size: 18px;
  }
  svg{
    margin-top: 6px;
    margin-left: 2px;
  }
`