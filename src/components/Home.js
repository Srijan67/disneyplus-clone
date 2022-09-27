import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
    </Container>
  );
};
const Container = styled.main`
  position: relative;
  background: url("/images/home-background.png");
  min-height: calc(100vh - 250px);
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") no-repeat center fixed;
    position: absolute;
    content: "";
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
