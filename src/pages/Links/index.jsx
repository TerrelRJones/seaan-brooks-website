import styled from "styled-components";
import { socialIconData } from "../../components/SocialIcon";
import aslLogo from "../../assets/seaan_asl_logo.png";
import { AlbumImg } from "../Home";
import albumArtwork from "../../assets/album-artwork.jpeg";
import tapIn from "../../assets/tapIn.png";

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

  a {
    text-decoration: none;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 0;

    img {
      object-fit: contain;
      overflow: hidden;
      height: 100%;
    }
  }

  .artwork-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .artwork {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 150px;
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

const LinksStyled = styled.div`
  height: 60px;
  width: 100%;
  outline: 4px solid black;
  border-radius: 2px;
  color: black;
  margin-top: 20px;

  h3 {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 900;
  }

  .contain {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 80%;
    margin: 0 auto;
    width: 100%;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const AslLogo = styled.img`
  object-fit: cover;
  overflow: hidden;
  height: 100%;
  margin: 0;
`;

const Links = () => {
  return (
    <LinksContainer>
      <div className="title">
        <img src={tapIn} alt="Title" />
      </div>
      <div className="artwork-container">
        <div className="artwork">
          <AlbumImg src={albumArtwork} alt="Album Artwork" />
        </div>
      </div>
      {[
        {
          id: 7,
          alt: "Seaans Website",
          icon: albumArtwork,
          link: "https://www.seaanbrooks.com",
          title: "Website",
        },
        ...socialIconData,
      ].map(({ id, alt, icon, link, title }) => (
        <a href={link} target="_blank" rel="noreferrer">
          <LinksStyled key={id}>
            <div className="contain">
              <Icon src={icon} alt={alt} />

              <h3>{title}</h3>
              <div></div>
            </div>
          </LinksStyled>
        </a>
      ))}
      <div className="logo-container">
        <AslLogo src={aslLogo} alt="ASL LOGO" />
      </div>
    </LinksContainer>
  );
};

export default Links;
