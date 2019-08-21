import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: inline-block;
  position: relative;
  top: 8rem;
  left: 50%;
  transform: translateX(-50%);
`;

const TitleText = styled.h2`
  font-family: ${props => props.theme.$SourceSansPro};
  font-weight: 600;
  font-size: 1rem;
  color: ${props => props.theme.$Grey};
`;
const VisuallyHidden = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  margin: -1px;
  padding: 0;
  border: 0;
  width: 1px;
  height: 1px;
`;
const Title = () => {
  return (
    <TitleWrapper>
      <TitleText>Total Followers</TitleText>
      <VisuallyHidden>Information about this (make dynamic)</VisuallyHidden>
    </TitleWrapper>
  );
};

export default Title;
