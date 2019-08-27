import React from "react";
import PropTypes from "prop-types";

import { DataWrapper , DataText } from './Data.styled';

const Data = ({ totalData }) => {
  return (
    <DataWrapper className="total-data__container">
      <DataText>{totalData}</DataText>
    </DataWrapper>
  );
};

Data.propTypes = {
  totalData: PropTypes.string.isRequired
};

export default Data;
