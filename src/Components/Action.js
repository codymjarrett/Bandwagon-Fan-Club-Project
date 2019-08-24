import React from "react";
import styled from "styled-components";

const ActionButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: -1.875rem;;

`;

const ActionButton = styled.button`
  position: relative;
  transform: translateX(50%);
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  border: none;
  background-color: ${props => props.theme.$BFCBlue};
  box-shadow: 0px .25rem .25rem rgba(0, 0, 0, 0.25);
  cursor: pointer;


  ::after {
    content: "";
    position: absolute;
    width: 2rem;
    border: .125rem solid #fff;
    ${'' /* come back to this - try maybe flex */}
    left: 1.375rem;
    top: 50%;
    transform: rotate(90deg);
  }

  ::before {
    content: "";
    position: absolute;
    width: 2rem;
    border: .125rem solid ${props => props.theme.$White};
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
  } 
`;

const Action = () => {
  return (
  <ActionButtonWrapper className="action-button__container">
      <ActionButton></ActionButton>
  </ActionButtonWrapper>
    )
};

export default Action;
