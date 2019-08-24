import React from "react";
import styled from "styled-components";

const DataWrapper = styled.div`
  text-align: center;
  padding: 2rem 0 0;
`;

const DataText = styled.h1`
  font-size: 4rem;
  font-family: ${props => props.theme.$Futura};
  color: ${props => props.theme.$BFCPrimaryGrey};
  
  
`;

const Data = ({ totalData }) => {
  return (
    <DataWrapper className="total-data__container">
      <DataText>{ totalData }</DataText>
    </DataWrapper>
  );
};

export default Data;
