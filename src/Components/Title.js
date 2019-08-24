import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  text-align: center;
  padding: 1rem;
  font-size: 1.2rem;

`;

const TitleText = styled.h2`
  font-family: ${props => props.theme.$SourceSansPro};
  font-weight: 600;
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
const Title = ({ title }) => {
  return (
    <TitleWrapper className="title__container">
      <TitleText>{title}</TitleText>
      <VisuallyHidden>{`Information about ${title}`}</VisuallyHidden>
    </TitleWrapper>
  );
};

export default Title;
