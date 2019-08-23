import React from "react";
import styled from "styled-components";

import Action from "./Action";
import Helper from "./Helper";
import Icon from "./Icon";
import Data from "./Data";
import Title from "./Title";
import Growth from "./Growth";

const Base = styled.div`
  width: 351px;
  height: 425px;
  box-shadow: 0px 3px 18px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: ${props => props.theme.$White};
  position: relative;
  transition: all .5s ease;
  margin: 4rem 50%;
  transform: translateX(-50%);



//   &:hover {
//    transform: translate(0, -1rem);
//    box-shadow: 0px 18px 42px rgba(0, 0, 0, 0.35);
// ;
//   }

// }
${"" /* ${({ scaled }) => scaled &&` transform: translateX(-20px)`} */}


`;

const Card = ({ title, svg, data, growthRate, isScaled }) => {
  return (
    <Base scaled={isScaled}>
      <Action />
      <Helper title={title} data={data} growthRate={growthRate} />
      <Icon svg={svg} />
      <Data data={data} />
      <Title title={title} />
      <Growth growthRate={growthRate} />
    </Base>
  );
};

export default Card;
