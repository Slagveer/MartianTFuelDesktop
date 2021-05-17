import React from "react";
import "./Group8.css";

function Group8(props) {
  const { fill64, fill63, fill65 } = props;

  return (
    <div className="group-8">
      <img className="fill-64" src={fill64} />
      <img className="fill-63" src={fill63} />
      <img className="fill-65" src={fill65} />
    </div>
  );
}

export default Group8;
