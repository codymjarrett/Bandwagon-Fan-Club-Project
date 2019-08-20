import React from "react";
import styled from "styled-components";


const Card = styled.div`
  width: 351px;
  height: 425px;
  box-shadow: 0px 3px 18px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: ${props => props.theme.$White};
  margin: 2rem auto;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    right: -30px;
    top: -30px;
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    background-color: ${props => props.theme.$Blue};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Base = ({ children }) => {
  return (
    <Card>
      {children}
    </Card>
  );
};

export default Base;
