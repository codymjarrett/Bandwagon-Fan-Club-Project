import React from "react";
import styled from "styled-components";

const HelperIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;
const OuterIconCircle = styled.div`
  position: relative;
  width: 26px;
  height: 26px;
  border: 2px solid #929292;
  border-radius: 100%;
  left: 1rem;
  top: 1rem;
  display: inline-block;
`;

const HelperIcon = styled.span`
  position: absolute;
  font-family: Source Sans Pro;
  font-weight: 600;
  font-size: 24px;
  color: #929292;
  left: 30%;
  top: 50%;
  transform: translateY(-50%);

  
`;

const HelperToolTip = styled.span`
    position: absolute;
    ${'' /* display: inline-block; */}
    font-size: 11px;
    width: 9rem;
    bottom: -49px;
    left: -118px;
    background: grey;
    color: white;
    border-radius: 10px;
    padding: 5px;
    opacity:0;
    ${'' /* display: none; */}
    transition: all 1s ease;

    ${OuterIconCircle}:hover & {
      ${'' /* display:inline-block; */}
      opacity: 1;

    }

   

  ::after {
    content: "";
    position: absolute;
    right: 12px;
    top: -9px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid grey;
    transform: rotate(180deg)
  }

`

const Helper = ({ title, data, growthRate }) => {
  return (
    <HelperIconWrapper>
      <OuterIconCircle>
        <HelperIcon>?</HelperIcon>
        <HelperToolTip>It looks like your {title} are at {data}</HelperToolTip>
      </OuterIconCircle>
    </HelperIconWrapper>
  );
};

export default Helper;
