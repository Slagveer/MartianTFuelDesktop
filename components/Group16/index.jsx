import React from "react";
import Group3 from "../Group3";
import "./Group16.css";

function Group16(props) {
  const {
    pexelsKyleLoftus2510422,
    pexelsFreestocksorg96380,
    pexelsCottonbro4009598,
    pexelsStephenNiemeier63703,
    pexelsRahulPandit3052360,
    path2,
    path3,
    path4,
    path5,
    path6,
    path7,
    path8,
    path9,
    path10,
    path11,
    pexelsAbetLlacer927444,
  } = props;

  return (
    <div className="group-16">
      <div className="overlap-group6-3">
        <div className="rectangle-copy-8"></div>
        <img className="pexels-kyle-loftus-2510422" src={pexelsKyleLoftus2510422} />
        <img className="pexels-freestocksorg-96380" src={pexelsFreestocksorg96380} />
        <img className="pexels-cottonbro-4009598" src={pexelsCottonbro4009598} />
        <img className="pexels-stephen-niemeier-63703" src={pexelsStephenNiemeier63703} />
        <img className="pexels-rahul-pandit-3052360" src={pexelsRahulPandit3052360} />
        <div className="rectangle-1"></div>
        <Group3 />
        <Group3 className="group-3-copy" />
        <div className="martian-gas-token-color-copy-1">
          <div className="overlap-group7">
            <div className="group-3">
              <img
                className="path-31"
                src="https://anima-uploads.s3.amazonaws.com/projects/60a12b3a64fa84b611974b26/releases/60a13451ebca4dfe6f6daf66/img/path-167@1x.png"
              />
              <div className="overlap-group8">
                <img className="path-24" src={path2} />
                <img className="path-26" src={path3} />
              </div>
            </div>
            <img className="path-23" src={path4} />
            <img className="path-30" src={path5} />
            <img className="path-27" src={path6} />
            <img className="path-29" src={path7} />
            <img className="path-23" src={path8} />
            <img className="path-25" src={path9} />
            <img className="path-32" src={path10} />
            <img className="path-28" src={path11} />
          </div>
        </div>
        <img className="pexels-abet-llacer-927444" src={pexelsAbetLlacer927444} />
      </div>
    </div>
  );
}

export default Group16;
