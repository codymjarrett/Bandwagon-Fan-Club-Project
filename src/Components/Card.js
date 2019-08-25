import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


import Action from "./Action";
import Helper from "./Helper";
import Icon from "./Icon";
import Data from "./Data";
import Title from "./Title";
import Growth from "./Growth";

const Base = styled.div`
  width: 21.9375rem;
  height: 26.5625rem;
  box-shadow: 0px 0.1875rem 1.125rem rgba(0, 0, 0, 0.25);
  border-radius: .3125rem;
  background-color: ${props => props.theme.$White};
  position: relative;
  transition: all .5s ease;
  margin: 4rem 50%;
  transform: translateX(-50%);



//   &:hover {
//    transform: translate(0, -1rem);
//    box-shadow: 0px 1.125rem 2.625rem rgba(0, 0, 0, 0.35);
// ;
//   }

// }
${"" /* ${({ scaled }) => scaled &&` transform: translateX(-20px)`} */}


`;

const Card = ({ title, svg, totalData, growthRate, isScaled }) => {
  return (
    <Base scaled={isScaled} className="card">
      <Action />
      <Helper title={title} totalData={totalData} growthRate={growthRate} />
      <Icon svg={svg} />
      <Data totalData={totalData} />
      <Title title={title} />
      <Growth growthRate={growthRate} />
    </Base>
  );
};


Card.propTypes = {
  title: PropTypes.string.isRequired,
  svg: PropTypes.object.isRequired,
  totalData:PropTypes.string.isRequired,
  growthRate: PropTypes.object,
}


export default Card;
