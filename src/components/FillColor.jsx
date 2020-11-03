import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const FillColor = ({ color }) => {
  const { setFillColor } = useContext(GlobalContext);

  return (
    <div
      className="fill-color"
      style={{ background: `#${color}` }}
      onClick={(e) => setFillColor(color)}
    ></div>
  );
};

export default FillColor;
