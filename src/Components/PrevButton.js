import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background-color: #00a6ff;
  position: absolute;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  left: 0;

  
  top: 50%;
  transform: translateY(-50%);

  ::after {
    content: "";
    border-left: 1.5rem solid transparent;
    border-right: 1.5rem solid transparent;
    border-bottom: 2.5rem solid ${props => props.theme.$White};
    position: absolute;
    left: 50%;
    transform: translate(-60%, -50%) rotate(-90deg);
`;

const PrevButton = ({ handlePrevButton }) => {
  return (
    <>
      <Button onClick={handlePrevButton} />
    </>
  );
};

export default PrevButton;
