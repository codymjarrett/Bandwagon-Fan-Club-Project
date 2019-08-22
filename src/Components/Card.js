import React from "react";
import styled from "styled-components";

// import CardContainer from "./CardContainer";
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
  margin: 2rem auto;
  position: absolute;
  ${'' /* opacity: 1;  */}
  ${'' /* display: inline-block; */}
  left: 50%;
  transform: translateX(-50%);
}

  ${'' /* ${({ isActive }) =>
    isActive &&
    `
  opacity: 1;
  left: 50%;
  transform: translateX(-50%);
  `} */}
`;

const Card = ({ title, svg, data, growthRate }) => {
  return (
    <Base>
        <Action />
        <Helper />
        <Icon svg={svg}/>
        <Data data={data}/>
        <Title title={title}/>
        <Growth growthRate={growthRate} />
    </Base>
  );
};

export default Card;
