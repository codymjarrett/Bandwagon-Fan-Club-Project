import React from "react";
import PropTypes from "prop-types";

import { HelperIconContainer, OuterIconCircle,HelperIcon, HelperToolTip } from './Helper.style';

const Helper = ({ title, growthRate }) => {
  var downOrUp;
  if (growthRate) {
    if (growthRate.growthGain) {
      downOrUp = "increased";
    } else if (!growthRate.growthGain) {
      downOrUp = "decreased";
    }
  }

  return (
    <HelperIconContainer className="helper-container">
      {growthRate && (
        <OuterIconCircle>
          <HelperIcon>?</HelperIcon>
            <HelperToolTip>
              Your {title} have {downOrUp} by {growthRate.growthData} this month!
            </HelperToolTip>
        </OuterIconCircle>
      )}
    </HelperIconContainer>
  );
};

Helper.propTypes = {
  title: PropTypes.string.isRequired,
  growthRate: PropTypes.object,
}

export default Helper;
