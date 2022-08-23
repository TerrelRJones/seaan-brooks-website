import styled from "styled-components";

import homeBtn from "../../assets/home-btn.svg";
import musicBtn from "../../assets/music-btn.svg";
import merchBtn from "../../assets/merch-btn.svg";
import bioBtn from "../../assets/bio-btn.svg";

import Button from "../Button";
import NavBar from "../NavBar";
import SocialIcon from "../SocialIcon";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.main`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  background-color: #ebecee;

  @media (max-width: 500px) {
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 40px;

  &.bottom {
    margin-top: 0;
    margin-bottom: 40px;
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  &.bottom {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

const MiddleContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 40px;
  margin-top: auto;
  margin-bottom: 40px;

  @media (max-width: 500px) {
    margin-bottom: 0;
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
`;

const SiteLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <TopContainer>
        <NavBar>
          <Button
            img={homeBtn}
            alt="Home Button"
            onClick={() => navigate("/")}
          />
          <Button
            img={musicBtn}
            alt="Music Button"
            onClick={() => navigate("music")}
          />
          <Button
            img={bioBtn}
            alt="Bio Button"
            onClick={() => navigate("bio")}
          />
        </NavBar>
      </TopContainer>
      <MiddleContainer>{children}</MiddleContainer>
      <BottomContainer>
        <Footer>
          <Button
            img={merchBtn}
            alt="home button"
            onClick={() => navigate("merch")}
          />
          <SocialIcon />
        </Footer>
      </BottomContainer>
    </MainContainer>
  );
};

export default SiteLayout;
