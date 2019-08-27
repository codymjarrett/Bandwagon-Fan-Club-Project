import React from "react";
import PropTypes from "prop-types";


import { IconContainer, IconBackground, SVG } from "./Icon.style";

const Icon = ({ svg }) => {
  return (
    <IconContainer className="icon__container">
      <IconBackground>
        <SVG
          aria-hidden="true"
          focusable="false"
          data-prefix={svg.dataPrefix}
          data-icon={svg.dataIcon}
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

Icon.propTypes = {
  svg: PropTypes.object.isRequired,
}

export default Icon;
