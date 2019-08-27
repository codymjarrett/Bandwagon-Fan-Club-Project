import React from "react";
import PropTypes from "prop-types";


import Action from "../Action/Action";
import Helper from "../HelperUI/Helper";
import Icon from "../IconUI/Icon";
import Data from "../DataUI/Data";
import Title from "../Title/Title";
import Growth from "../Growth/Growth";

import { Base } from "./Card.styled"



const Card = ({ id, title, svg, totalData, growthRate, handleActionButton, setIsModalOpen }) => {
  return (
    <Base className="card">
      <Action id={id}  growthRate={growthRate} setIsModalOpen={setIsModalOpen} handleActionButton={handleActionButton}/>
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
