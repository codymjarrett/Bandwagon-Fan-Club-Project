import React from "react";
import styled from "styled-components";
import FanSVG from "./SVG/fans";

const IconWrapper = styled.div`
  position: relative;
`;

const IconBackground = styled.div`
  background: ${props => props.theme.$PrimaryVariant};
  border-radius: 100%;
  position: relative;
  left: 50%;
  top: 15%;
  transform: translate(-50%, -50%);
  width: 5rem;
  height: 5rem;
`;

const Icon = () => {
  return (
    // <IconWrapper class="icon__container">
    <IconBackground class="icon__container">
      <FanSVG />
    </IconBackground>
    // </IconWrapper>
  );
};

export default Icon;
