import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import GrowthTriangle from "./GrowthTriangle";

//  com back to this 
const red = `${props => props.theme.$AuraRed}`;
const green = `${props => props.theme.$Green}`; 

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

const GrowthText = styled.span`
  color: ${props => props.gain ? "#24DA24" : "#EA1725" };
  display: block;
`;

const Growth = ({ growthRate }) => {
  return (
    <GrowthWrapper className="growth-rate__container">
      <GrowthElementsWrapper>
        {growthRate && <GrowthTriangle growth={growthRate} />}
        {growthRate && <GrowthText gain={growthRate.growthGain}>{growthRate.growthData}</GrowthText>}
      </GrowthElementsWrapper>
    </GrowthWrapper>
  );
};

Growth.propTypes = {
  growthRate: PropTypes.object,
}

export default Growth;
