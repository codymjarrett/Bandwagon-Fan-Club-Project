import React from "react";

import { Container } from "./CardContainer.style";

const CardContainer = ({ children }) => {
  return <Container className="card__container">{children}</Container>;
};

export default CardContainer;
