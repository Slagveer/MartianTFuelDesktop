import React from "react";
import "./Group6.css";

function Group6(props) {
  const { path4, path4Copy2 } = props;

  return (
    <div className="group-6">
      <div className="overlap-group6-2">
        <img className="path-4-1" src={path4} />
        <img className="path-4-copy-2" src={path4Copy2} />
      </div>
    </div>
  );
}

export default Group6;
