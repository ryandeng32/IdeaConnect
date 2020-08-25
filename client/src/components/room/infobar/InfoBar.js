import React from "react";
import "./InfoBar.css";
const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <i className="fas fa-signal signalIcon"></i>
        <h3>{room.substring(0, 5) + "..."}</h3>
      </div>
      <div className="RightInnerContainer">
        <a href="/">
          <i className="fas fa-times closeIcon"></i>
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
