import React from "react";
import "./MartianGasTokenColor.css";

function MartianGasTokenColor(props) {
  const { path2, path3, path4, path5, path6, path7, path8, path9, path10, path11 } = props;

  return (
    <div className="martian-gas-token-color">
      <div className="overlap-group24">
        <div className="group-1">
          <img
            className="path-15"
            src="https://anima-uploads.s3.amazonaws.com/projects/60a12b3a64fa84b611974b26/releases/60a13451ebca4dfe6f6daf66/img/path-169@1x.png"
          />
          <div className="overlap-group6-1">
            <img className="path-22" src={path2} />
            <img className="path-18" src={path3} />
          </div>
        </div>
        <img className="path-13" src={path4} />
        <img className="path-19" src={path5} />
        <img className="path-20" src={path6} />
        <img className="path-14" src={path7} />
        <img className="path-13" src={path8} />
        <img className="path-16" src={path9} />
        <img className="path-17" src={path10} />
        <img className="path-21" src={path11} />
      </div>
    </div>
  );
}

export default MartianGasTokenColor;
