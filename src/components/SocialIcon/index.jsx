import styled from "styled-components";
import twitterIcon from "../../assets/twitter-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import youtubeIcon from "../../assets/youtube-icon.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import twitchIcon from "../../assets/twitch-icon.svg";
import itunesIcon from "../../assets/itunes.png";
import spotifyIcon from "../../assets/spotify.png";
import tidalIcon from "../../assets/tidal.png";

const SocialBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;

    &:first-child,
    &:nth-child(2),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7) {
      margin-right: 10px;
    }

    @media (max-width: 500px) {
      &:first-child,
      &:nth-child(2),
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7) {
        margin-right: 5px;
      }
    }
  }
`;

const Icon = styled.img`
  height: 40px;
  width: 40px;

  &:hover {
    cursor: pointer;
    scale: 1.2;
  }

  @media (max-width: 500px) {
    height: 30px;
    width: 30px;
  }
`;

export const socialIconData = [
  {
    id: 1,
    alt: "Twitter Icon",
    icon: twitterIcon,
    link: "https://twitter.com/SeaanBrooks",
    title: "Twitter",
  },
  {
    id: 2,
    alt: "Instagram Icon",
    icon: instagramIcon,
    link: "https://www.instagram.com/seaan_brooks",
    title: "Instagram",
  },
  {
    id: 3,
    alt: "YouTube Icon",
    icon: youtubeIcon,
    link: "https://www.youtube.com/channel/UCpQgDB0MOFd4x849JS8IyQw",
    title: "YouTube",
  },
  {
    id: 4,
    alt: "Facebook Icon",
    icon: facebookIcon,
    link: "https://www.facebook.com/SeaanBrooks",
    title: "FaceBook",
  },
  {
    id: 5,
    alt: "Twitch Icon",
    icon: twitchIcon,
    link: " https://www.twitch.tv/chefseaan",
    title: "Twitch",
  },
  {
    id: 6,
    alt: "Tidal Icon",
    icon: tidalIcon,
    link: "https://tidal.com/browse/artist/9073256",
    title: "Tidal",
  },
  {
    id: 7,
    alt: "Spotify Icon",
    icon: spotifyIcon,
    link: "https://open.spotify.com/artist/69KjyMm0B05Wn6MOlG3wuu?si=KbcwuWYXTSSC9fm4Tk1DcQ",
    title: "Spotify",
  },
  {
    id: 8,
    alt: "Apple Music Icon",
    icon: itunesIcon,
    link: "https://music.apple.com/in/artist/seaan-brooks/1171934384",
    title: "Apple Music",
  },
];

const index = () => {
  return (
    <SocialBtnContainer>
      {socialIconData.map(({ alt, icon, link, id }) => (
        <a key={id} href={link} target="_blank" rel="noreferrer">
          <Icon src={icon} alt={alt} />
        </a>
      ))}
    </SocialBtnContainer>
  );
};

export default index;
