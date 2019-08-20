import React from "react";
import styled from "styled-components";

const HelperIconWrapper = styled.div`
  position: relative;
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

const Helper = () => {
  return (
    <HelperIconWrapper>
      <OuterIconCircle>
        <HelperIcon>?</HelperIcon>
      </OuterIconCircle>
    </HelperIconWrapper>
  );
};

export default Helper;
