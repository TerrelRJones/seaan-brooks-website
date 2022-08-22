import styled from "styled-components";
import profilePic from "../../assets/sb-photo.jpeg";

const BioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  .paragraph-box {
    max-width: 800px;
    padding: 0 16px;
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  width: 400px;
  max-height: 400px;
  height: 100%;
  margin-right: 40px;
  background-color: black;

  @media (max-width: 500px) {
    width: 100%;
    margin: 20px 0;
  }
`;

const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 0;
  margin-bottom: 20px;

  @media (max-width: 500px) {
    font-size: 20px;
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-weight: 600;

  &.first {
    margin-top: 0;
  }
`;
const Bio = () => {
  return (
    <BioContainer>
      <ImageContainer>
        <ProfilePic src={profilePic} alt="Seaan Profile Pic" />
      </ImageContainer>
      <div className="paragraph-box">
        <Title>SEAAN BROOKS</Title>
        <Paragraph className="first">
          Seaan Brooks has been on the ascent to the point where he’s raising
          his feature rates. He exists as a trenchant voice in his native
          Tacoma, weaving in and out of beats, ruminating over stress and regret
          and sorrow. Over the grisly results of running the streets; physical
          death leading to lying in a casket or potential spiritual death from a
          prison sentence. Brooks doesn’t find much value in rappers who read
          from scripts and carefully cultivate their personas, nor tough guys
          who are only tough when they press the “send” button on social media.
          Where he comes from, trust is the most precious commodity; a resource
          seldomly given or received.
        </Paragraph>

        <Paragraph>
          He rides around with folks who keep peacemakers in order to keep the
          peace.
        </Paragraph>

        <Paragraph>
          Brooks is an existentialist at heart, par for the course when you grow
          up in an environment where violence sweeps away a good number of the
          people you know and love. His work is heavy from the hand of death
          weighing it down, but there’s also a determination found in his
          themes, the drive to make substantial art before his timecard is
          punched by whatever higher power is out there. In his music you can
          tell there is an emotional urgency crouched within the moody
          soundscapes. He’s not necessarily haunted by the streets which raised
          him, because those streets are home. He’s haunted by cops dropping
          black bodies on the street, he’s haunted by setbacks and perceived
          mistakes.
        </Paragraph>

        <Paragraph>
          To wrap everything up, listening to the music you can feel the story
          he his giving to the world.
        </Paragraph>
      </div>
    </BioContainer>
  );
};

export default Bio;
