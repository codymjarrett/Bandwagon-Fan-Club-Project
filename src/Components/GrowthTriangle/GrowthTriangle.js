import React from "react";

import { GainTriangle, LossTriangle } from './GrowthTriangle.styled';


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
