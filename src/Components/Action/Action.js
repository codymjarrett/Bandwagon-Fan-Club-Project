import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { ActionButtonWrapper } from "./Action.styled";

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
