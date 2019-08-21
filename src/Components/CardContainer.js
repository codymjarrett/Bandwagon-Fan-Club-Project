import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const CardContainer = ({ children }) => {
  return <Container className="card__container">{children}</Container>;
};

export default CardContainer;
