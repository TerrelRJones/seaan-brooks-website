import styled from "styled-components";
import twitterIcon from "../../assets/twitter-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import youtubeIcon from "../../assets/youtube-icon.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import twitchIcon from "../../assets/twitch-icon.svg";

const SocialBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;

    &:first-child {
      margin-right: 10px;
    }
    &:nth-child(2) {
      margin-right: 10px;
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

  @media (max-width: 400px) {
    height: 30px;
    width: 30px;
  }
`;

const socialIconData = [
  {
    id: 1,
    alt: "Twitter Icon",
    icon: twitterIcon,
    link: "https://twitter.com/SeaanBrooks",
  },
  {
    id: 2,
    alt: "Instagram Icon",
    icon: instagramIcon,
    link: "https://www.instagram.com/seaan_brooks",
  },
  {
    id: 3,
    alt: "YouTube Icon",
    icon: youtubeIcon,
    link: "https://www.youtube.com/channel/UCpQgDB0MOFd4x849JS8IyQw",
  },
  {
    id: 4,
    alt: "Facebook Icon",
    icon: facebookIcon,
    link: "https://www.facebook.com/SeaanBrooks",
  },
  {
    id: 5,
    alt: "Twitch Icon",
    icon: twitchIcon,
    link: " https://www.twitch.tv/chefseaan",
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
