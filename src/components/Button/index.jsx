import styled from "styled-components";

const StyledImgButtonContainer = styled.div`
  height: 30px;

  @media (min-width: 500px) {
    height: 50px;

    &:hover {
      cursor: pointer;
      scale: 1.2;
    }
  }
`;

const BtnImg = styled.img`
  height: 100%;
  width: 100%;
`;

const Button = ({ img, alt, onClick }) => {
  return (
    <StyledImgButtonContainer>
      <BtnImg src={img} alt={alt} onClick={onClick} />
    </StyledImgButtonContainer>
  );
};

export default Button;
