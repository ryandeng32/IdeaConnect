import React from "react";
import spinner from "./spinner_2.gif";

export default () => (
  <div style={{ paddingTop: "2rem" }}>
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="Loading..."
    />
  </div>
);
