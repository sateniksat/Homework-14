import React from "react";

export const Button = (props) => {
  return (
    <button
      onClick={() => {
        // props.title == "increase" ? props.clickHandler(1) : props.clickHandler(-1)
        if (props.title === "increase") {
          props.clickHandler(1);
        } else if (props.title === "decrease") {
          props.clickHandler(-1);
        } else {
          props.clickHandler();
        }
      }
    }
    >
      {props.title}
    </button>
  );
};
