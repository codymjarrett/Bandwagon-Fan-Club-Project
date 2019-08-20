import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
  background-color: #00a6ff;
  position: absolute;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${'' /* left: -300px; */}
  top: 50%;
  transform: translateY(-50%);
`;

const PrevButton = () => {

    return(
        <>
        <Button></Button>
        </>
    )
};

export default PrevButton;
