import React from "react";
import styled from "styled-components";

const ActionButtonWrapper = styled.div`
  position: relative;

`;

const ActionButton = styled.button`
  position: absolute;
  right: 0px;
  transform: translateX(50%);
  top: -30px;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background-color: ${props => props.theme.$BFCBlue};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;


  ::after {
    content: "";
    position: absolute;
    width: 2rem;
    border: 2px solid #fff;
    ${'' /* come back to this - try maybe flex */}
    left: 22px;
    top: 50%;
    transform: rotate(90deg);
  }

  ::before {
    content: "";
    position: absolute;
    width: 2rem;
    border: 2px solid #fff;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
  } 
`;

const Action = () => {
  return (
  <ActionButtonWrapper>
      <ActionButton></ActionButton>
  </ActionButtonWrapper>
    )
};

export default Action;
