import React from "react";
import "./Group12Copy.css";

function Group12Copy(props) {
  const { fill72, fill73, fill74, className } = props;

  return (
    <div className={`group-12-copy ${className || ""}`}>
      <div className="overlap-group17">
        <img className="fill-72" src={fill72} />
        <img className="fill-73" src={fill73} />
        <img className="fill-74" src={fill74} />
      </div>
    </div>
  );
}

export default Group12Copy;
