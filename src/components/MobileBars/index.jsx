import styled from "styled-components";

const Bars = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 100%;

  @media (min-width: 500px) {
    display: none;
  }
`;

const Bar = styled.div`
  width: 100%;
  background-color: #49484a;
  height: 10px;
  opacity: 0.3;
`;

const MobileBars = () => {
  return (
    <Bars>
      <Bar />
      <Bar />
      <Bar />
    </Bars>
  );
};

export default MobileBars;
