import React from "react";
import "./Group15.css";

function Group15(props) {
  const { combinedShape, path5Copy, path5 } = props;

  return (
    <div className="group-15">
      <div className="overlap-group-4">
        <div className="group-14">
          <div className="overlap-group-4">
            <img className="combined-shape" src={combinedShape} />
            <img className="path-5-copy" src={path5Copy} />
          </div>
        </div>
        <img className="path-5-1" src={path5} />
      </div>
    </div>
  );
}

export default Group15;
