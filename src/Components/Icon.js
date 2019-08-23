import React from "react";
import styled from "styled-components";



const IconBackground = styled.div`
  background: ${props => props.theme.$PrimaryVariant};
  border-radius: 100%;
  position: relative;
  left: 50%;
  top: 15%;
  transform: translate(-50%, -50%);
  width: 5rem;
  height: 5rem;

  &:hover {
    background: linear-gradient(45deg, ${props => props.theme.$AuraLightOrange},${props => props.theme.$AuraRaspberry});
  }
`;

const SVG = styled.svg`
  width: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.$Primary};
`;

const Icon = ({ svg }) => {
  return (
    <IconBackground>
      <SVG
        aria-hidden="true"
        focusable="false"
        data-prefix={svg.dataPrefix}
        data-icon={svg.dataIcon}
        className={svg.className}
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path d={svg.path} />
      </SVG>
    </IconBackground>
  );
};

export default Icon;
