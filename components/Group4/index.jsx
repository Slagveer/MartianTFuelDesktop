import React from "react";
import "./Group4.css";

function Group4(props) {
  const { children } = props;

  return (
    <div className="group-4">
      <div className="buy-pre-sale-tokens verdana-normal-white-20px">{children}</div>
    </div>
  );
}

export default Group4;
