import React from "react";
import PropTypes from "prop-types";

import { TitleWrapper, TitleText, VisuallyHidden } from "./Title.styled";

const Title = ({ title }) => {
  return (
    <TitleWrapper className="title__container">
      <TitleText>{title}</TitleText>
      <VisuallyHidden>{`Information about ${title}`}</VisuallyHidden>
    </TitleWrapper>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title;
