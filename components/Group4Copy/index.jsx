import React from "react";
import "./Group4Copy.css";

function Group4Copy(props) {
  const { path3, joinUsOnTelegram } = props;

  return (
    <div className="group-4-copy">
      <div className="overlap-group23 border-1px-purple-heart-2">
        <div className="group-2">
          <div className="logo">
            <img className="path-3-1" src={path3} />
          </div>
          <div className="join-us-on-telegram verdana-normal-fuscous-gray-20px">{joinUsOnTelegram}</div>
        </div>
      </div>
    </div>
  );
}

export default Group4Copy;
