import React from "react";
import styled from "styled-components";

const GrowthWrapper = styled.div`
  font-family: ${props => props.theme.$Futura};
  font-weight: bold;
  font-size: 1.1rem;
  margin: 1rem;
  
`;
const GrowthElementsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const GrowthIcon = styled.span`
  display: block;
  position: relative;
  width: 2rem;
  align-self: flex-start; 

  ::before {
    content: "";
    border-left: .625rem solid transparent;
    border-bottom: .625rem solid ${props => props.theme.$Green};
    border-right: .625rem solid transparent;
    position: absolute;
    top: 50%;
    left: 0;
  }
`;
const GrowthText = styled.span`
  color: ${props => props.theme.$Green};
  display: block;
`;

const Growth = ({ growthRate }) => {
  return (
    <GrowthWrapper className="growth-rate__container">
      <GrowthElementsWrapper>
        {growthRate && <GrowthIcon />}
        <GrowthText>{growthRate}</GrowthText>
      </GrowthElementsWrapper>
    </GrowthWrapper>
  );
};

export default Growth;
