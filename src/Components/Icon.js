import React from "react";
import styled from "styled-components";

const IconContainer = styled.div``;

const IconBackground = styled.div`
  background: ${props => props.theme.$PrimaryVariant};
  border-radius: 100%;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  &:hover {
    background: linear-gradient(
      45deg,
      ${props => props.theme.$AuraLightOrange},
      ${props => props.theme.$AuraRaspberry}
    );
  }
`;

const SVG = styled.svg`
  width: 3rem;
  fill: ${props => props.theme.$Primary};

  ${IconBackground}:hover & {
    fill: ${props => props.theme.$White};
  }
`;

const Icon = ({ svg }) => {
  return (
    <IconContainer className="icon__container">
      <IconBackground>
        <SVG
          aria-hidden="true"
          focusable="false"
          data-prefix={svg.dataPrefix}
          data-icon={svg.dataIcon}
          className={svg.className}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={svg.viewBox}
        >
          <path d={svg.path} />
        </SVG>
      </IconBackground>
    </IconContainer>
  );
};

export default Icon;
