import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Shape from "./Shape";
import FillColor from "./FillColor";
import StrokeColor from "./StrokeColor";

const ShapeContainer = () => {
  const { resetHandler, drawn, fillColorArray, strokeColorArray } = useContext(
    GlobalContext
  );

  return (
    <>
      <div className="shape-container mt-3">
        <svg width="300" height="300">
          {drawn && <Shape />}
        </svg>
      </div>

      {drawn && (
        <div className="stroke-container mt-2">
          <h5>STROKE</h5>
          <div className="stroke-select">
            {strokeColorArray.map((color, index) => (
              <StrokeColor key={index} color={color} />
            ))}
          </div>
        </div>
      )}

      {drawn && (
        <div className="fill-container mt-2">
          <h5>FILL</h5>
          <div className="fill-select">
            {fillColorArray.map((color, index) => (
              <FillColor key={index} color={color} />
            ))}
          </div>
        </div>
      )}

      {drawn && (
        <div className="button-container mt-3">
          <button className="btn btn-primary" onClick={(e) => resetHandler()}>
            RESET COLORS
          </button>
        </div>
      )}
    </>
  );
};

export default ShapeContainer;
