import React from "react";
import plus from "../../images/plusicon.png";
import "./Sidebar.css";

export default function Sidebar() {
  const color = ["#fe9b72", "#fec972", "#00d4fe", "#b693fd", "#e4ee91"];
  return (
    <div className="sidebar">
      <img src={plus} alt="add" />
      <ul className="sidebar_list">
        {color.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
          />
        ))}
      </ul>
    </div>
  );
}
