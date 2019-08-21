import React from "react";
import styled from "styled-components";

const GrowthWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-family: ${props => props.theme.$Futura};
  font-weight: bold;
  font-size: 1.1rem;
`;
const GrowthElementsWrapper = styled.div`
  display: flex;
`;
const GrowthIcon = styled.span`
  display: block;
  position: relative;
  width: 2rem;
  transform: translateY(-25%);

  ::before {
    content: "";
    border-left: 10px solid transparent;
    border-bottom: 10px solid ${props => props.theme.$Green};
    border-right: 10px solid transparent;
    position: absolute;
    top: 50%;
    left: 0;
  }
`;
const GrowthText = styled.span`
  color: ${props => props.theme.$Green};
  display: block;
`;

const Growth = () => {
  return (
    <GrowthWrapper>
      <GrowthElementsWrapper>
        <GrowthIcon />
        <GrowthText>116.7%</GrowthText>
      </GrowthElementsWrapper>
    </GrowthWrapper>
  );
};

export default Growth;
