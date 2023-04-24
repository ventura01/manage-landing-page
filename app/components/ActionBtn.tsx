import React from "react";

type ButtonProps = {
    text:string,
    className:string
};

const ActionBtn = (props: ButtonProps) => {
  return (
    <button className={`${props.className} px-8 py-2  text-xs`}>
      {props.text}
    </button>
  );
};

export default ActionBtn;
