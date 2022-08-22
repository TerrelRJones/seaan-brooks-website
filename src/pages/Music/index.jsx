import styled from "styled-components";

const MusicPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  &:first-child {
    margin-top: 40px;
  }
`;

const VideoContainer = styled.div`
  width: 600px;
  height: 300px;
  margin-bottom: 100px;

  @media (max-width: 500px) {
    width: 300px;
    height: 150px;
    margin-bottom: 60px;
  }
`;

const Video = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const Title = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const videoDetails = [
  {
    id: 1,
    title: "Seaan Brooks “My Name” Sunday Raps (week 2)",
    link: "https://www.youtube-nocookie.com/embed/sMJm4ABj35U?controls=0",
  },
  {
    id: 2,
    title: "Seaan Brooks “WaterBoy” (Sunday Raps week 1)",
    link: "https://www.youtube-nocookie.com/embed/6QowON0ncc0?controls=0",
  },
  {
    id: 3,
    title: '"Duckets" Freestyle (Prod. Khris P)',
    link: "https://www.youtube-nocookie.com/embed/-kdv-DJltlk?controls=0",
  },
  {
    id: 4,
    title: '"Say Goodbye" Freestyle',
    link: "https://www.youtube-nocookie.com/embed/tbWrxBuTvW4?controls=0",
  },
];

const Music = () => {
  return (
    <MusicPageContainer>
      {videoDetails.map(({ title, link, id }) => (
        <VideoContainer key={id}>
          <Video
            src={link}
            title={title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Video>
          <Title>{title}</Title>
        </VideoContainer>
      ))}
    </MusicPageContainer>
  );
};

export default Music;
