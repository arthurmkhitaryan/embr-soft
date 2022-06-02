import styled from "styled-components";

export const BannerWrapper = styled.div`
  width: 100vw;
  height: 700px;
  background-image:url(${props => props.image.src})`;
