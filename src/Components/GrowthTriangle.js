import React from "react";
import styled from "styled-components";

const GainTriangle = styled.span`
  display: block;
  position: relative;
  width: 2rem;
  align-self: flex-start;

  ::before {
    content: "";
    border-left: 0.625rem solid transparent;
    border-bottom: 0.625rem solid ${props => props.theme.$Green};
    border-right: 0.625rem solid transparent;
    position: absolute;
    top: 50%;
    left: 0;
  }
`;

const LossTriangle = styled.span`
  display: block;
  position: relative;
  width: 2rem;
  align-self: flex-start;

  ::before {
    content: "";
    border-left: 0.625rem solid transparent;
    border-bottom: 0.625rem solid ${props => props.theme.$AuraRed};
    border-right: 0.625rem solid transparent;
    transform: rotate(180deg);
    position: absolute;
    top: 50%;
    left: 0;
  }
`;
const GrowthTriangle = ({ growth }) => {
  var icon;
  if (growth.growthGain) {
    icon = <GainTriangle />;
  } else if (!growth.growthGain) {
    icon = <LossTriangle />;
  } else if (growth.growthGain === null) {
    return null;
  }

  return <>{icon}</>;
};

export default GrowthTriangle;
