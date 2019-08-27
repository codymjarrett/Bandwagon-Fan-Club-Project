import React from "react";
import PropTypes from "prop-types";

import GrowthTriangle from "../GrowthTriangle/GrowthTriangle";
import { GrowthWrapper, GrowthElementsWrapper, GrowthText } from "./Growth.styled"



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
