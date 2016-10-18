import React from "react";

const HeaderStripe = () => {
  return (
    <div>
      <div id="header">
        <h1>IceBank Analyzer Financial Model</h1>
      </div>
      <div id="stripe">
        <button className="selected" >Summary</button>
        <span id="utilityDisplay"> Florida Power & Light </span>
        <button id="dd_chart">Design Day Profile</button>
        <button id="off_chart">Off-Peak Months Profile</button>
      </div>
    </div>
  );
};

export default HeaderStripe;
