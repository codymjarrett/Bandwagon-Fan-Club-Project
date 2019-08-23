import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background-color: #00a6ff;
  position: relative;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;


  &:hover {
    background: linear-gradient(to right, ${props => props.theme.$AuraLightBlue},${props => props.theme.$AuraBlue});
  }

  ::after {
    content: "";
    border-left: 1.5rem solid transparent;
    border-right: 1.5rem solid transparent;
    border-bottom: 2.5rem solid ${props => props.theme.$White};
    position: absolute;
    left: 50%;
    transform: translate(-40%, -50%) rotate(90deg);

   
  }
`;

const NextButton = ({handleNextButton}) => {
  return (
    <>
      <Button onClick={handleNextButton}/>
    </>
  );
};

export default NextButton;
