import React from "react";
import styled from "styled-components";

const DataWrapper = styled.div`
  position: relative;
`;

const DataText = styled.h1`
  font-size: 4rem;
  font-family: ${props => props.theme.$Futura};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Data = ({ totalData }) => {
  return (
    <DataWrapper>
      <DataText>{ totalData }</DataText>
    </DataWrapper>
  );
};

export default Data;
