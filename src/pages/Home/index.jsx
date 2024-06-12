import styled from "styled-components";
import albumArtwork from "../../assets/well-be-alright.jpeg";

const ArtworkContainer = styled.div`
  max-height: 600px;
  max-width: 600px;
  width: 100%;

  @media (max-width: 500px) {
    max-height: 400px;
    max-width: 400px;
  }
`;

export const AlbumImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <ArtworkContainer>
      <AlbumImg src={albumArtwork} alt="Artwork" />
    </ArtworkContainer>
  );
};

export default Home;
