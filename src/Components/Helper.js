import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const HelperIconContainer = styled.div`
  cursor: pointer;
  padding: 1rem;
`;

const OuterIconCircle = styled.div`
  position: relative;
  width: 1.625rem;
  height: 1.625rem;
  border: 0.125rem solid ${props => props.theme.$BFCGrey};
  border-radius: 100%;
`;

const HelperIcon = styled.span`
  position: absolute;
  font-family: Source Sans Pro;
  font-weight: 600;
  font-size: 1.5rem;
  color: ${props => props.theme.$BFCGrey};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HelperToolTip = styled.span`
  position: absolute;
  font-size: 0.6875rem;
  width: 9rem;
  bottom: -3.0625rem;
  left: -7.375rem;
  background: grey;
  color: white;
  border-radius: 0.625rem;
  padding: 0.3125rem;
  opacity: 0;
  transition: all 0.3s ease;

  ${OuterIconCircle}:hover & {
    opacity: 1;
  }

  ::after {
    content: "";
    position: absolute;
    right: 0.75rem;
    top: -0.625rem;
    border-left: 0.625rem solid transparent;
    border-right: 0.625rem solid transparent;
    border-top: 0.625rem solid ${props => props.theme.$BFCGrey};
    transform: rotate(180deg);
  }
`;

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
