import React from "react";
import styled from "styled-components";
import Helper from "./Helper";
import Icon from "./Icon";
import Data from './Data';
import Title from './Title';
import Growth from './Growth';

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const CardContainer = () => {
  return (
    <Container className="card__container">
      <Helper />
      <Icon />
      <Data />
      <Title />
      <Growth />
    </Container>
  );
};

export default CardContainer;
