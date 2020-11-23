import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter">
      <input type="text" placeholder="filter1"></input>
      <input type="text" placeholder="filter2"></input>
      <input type="text" placeholder="filter3"></input>
    </div>
  );
}

export default Filter;
