import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const ActionButtonWrapper = styled.button`
  position: absolute;
  right: 0;
  top: -1.875rem;
  transform: translateX(50%);
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  border: none;
  background-color: ${props => props.theme.$AuraNavy};
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      to right,
      ${props => props.theme.$AuraNavy},
      ${props => props.theme.$AuraPurple}
    );
  }
`;

const Action = ({ id, handleActionButton, setIsModalOpen, growthRate }) => {
  
  return (
    <ActionButtonWrapper
      className="action-button__container"
      data-id={id}
      onClick={()=> { handleActionButton(id); setIsModalOpen(true)}}
    >
      <FontAwesomeIcon
        icon={faEdit}
        size="3x"
        color="white"
        className="svg__edit-icon"
      />
    </ActionButtonWrapper>
  );
};

export default Action;
