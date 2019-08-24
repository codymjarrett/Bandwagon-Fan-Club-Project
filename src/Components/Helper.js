import React from "react";
import styled from "styled-components";

const HelperIconContainer = styled.div`
  cursor: pointer;
  padding: 1rem;

`;

const OuterIconCircle = styled.div`
  position: relative;
  width: 1.625rem;
  height: 1.625rem;
  border: .125rem solid ${props => props.theme.$Grey};
  border-radius: 100%;
`;

const HelperIcon = styled.span`
  position: absolute;
  font-family: Source Sans Pro;
  font-weight: 600;
  font-size: 1.5rem;
  color: ${props => props.theme.$Grey};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  
`;

const HelperToolTip = styled.span`
    position: absolute;
    font-size: .6875rem;
    width: 9rem;
    bottom: -3.0625rem;
    left: -7.375rem;
    background: grey;
    color: white;
    border-radius: .625rem;
    padding: .3125rem;
    opacity:0;
    transition: all .3s ease;

    ${OuterIconCircle}:hover & {
      ${'' /* display:inline-block; */}
      opacity: 1;

    }

   

  ::after {
    content: "";
    position: absolute;
    right: .75rem;
    top: -0.625rem;
    border-left: .625rem solid transparent;
    border-right: .625rem solid transparent;
    border-top: .625rem solid grey;
    transform: rotate(180deg)
  }

`

const Helper = ({ title, totalData, growthRate }) => {
  return (
    <HelperIconContainer className="helper-container">
      <OuterIconCircle>
        <HelperIcon>?</HelperIcon>
        <HelperToolTip>It looks like your {title} are at {totalData}</HelperToolTip>
      </OuterIconCircle>
    </HelperIconContainer>
  );
};

export default Helper;
