import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const StrokeColor = ({ color }) => {
  const { setStrokeColor } = useContext(GlobalContext);

  return (
    <div
      className="stroke-color"
      style={{ background: `#${color}` }}
      onClick={(e) => setStrokeColor(color)}
    ></div>
  );
};

export default StrokeColor;
