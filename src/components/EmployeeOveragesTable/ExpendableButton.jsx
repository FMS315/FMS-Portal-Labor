import React from "react";
import {FaPlusCircle} from "react-icons/fa";

export const ExpendableButton = ({ isOpen, toggle }) => {
  return (
    <FaPlusCircle onClick={toggle}>
      <span
        class="material-symbols-outlined"
        style={{
          transform: `rotate(${isOpen ? 180 : 0}deg)`,
          transition: "all 0.25s",
        }}
      >
      
      </span>
      
    </FaPlusCircle>
  );
};
