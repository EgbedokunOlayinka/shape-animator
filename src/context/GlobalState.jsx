import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import chooseColors from "../chooseColors";

import {
  CLEAR_SHAPE_HISTORY,
  SET_FILL,
  SET_STROKE,
  OFF_DRAWN,
  ON_DRAWN,
  SET_SHAPE,
  SET_DETAILS,
  RESET_DETAILS,
  UPDATE_HISTORY,
} from "./constants";

const fillColors = chooseColors();
const strokeColors = chooseColors();

let shapeHistory = [];
if (localStorage.getItem("shapeHistory")) {
  shapeHistory = JSON.parse(localStorage.getItem("shapeHistory"));
}

// Initial state
const initialState = {
  shape: "rectangle",
  details: {
    rectLength: 1,
    rectWidth: 1,
    squareLength: 1,
    circleRadius: 1,
    ellipseXradius: 1,
    ellipseYradius: 1,
    polygonSides: 3,
    polygonRadius: 1,
  },
  drawn: false,
  fillColorArray: fillColors,
  strokeColorArray: strokeColors,
  fill: "transparent",
  stroke: "white",
  history: shapeHistory,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const clearShapeHistory = () => {
    localStorage.removeItem("shapeHistory");

    dispatch({
      type: CLEAR_SHAPE_HISTORY,
    });
  };

  const setFillColor = (color) => {
    let fill;
    if (color) {
      fill = `#${color}`;
    } else {
      fill = "transparent";
    }

    dispatch({
      type: SET_FILL,
      payload: fill,
    });
  };

  const setStrokeColor = (color) => {
    let stroke;
    if (color) {
      stroke = `#${color}`;
    } else {
      stroke = "white";
    }

    dispatch({
      type: SET_STROKE,
      payload: stroke,
    });
  };

  const onDrawn = () => {
    dispatch({
      type: ON_DRAWN,
    });
  };

  const offDrawn = () => {
    dispatch({
      type: OFF_DRAWN,
    });
  };

  const setShape = (shape) => {
    dispatch({
      type: SET_SHAPE,
      payload: shape,
    });
  };

  const resetDetails = () => {
    dispatch({
      type: RESET_DETAILS,
    });
  };

  const setDetails = (e) => {
    const ppt = e.target.name;
    const val = e.target.value;

    dispatch({
      type: SET_DETAILS,
      payload: { ppt, val },
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onDrawn();
    const rectWidth = state.details.rectWidth;
    const rectLength = state.details.rectLength;
    const squareLength = state.details.squareLength;
    const circleRadius = state.details.circleRadius;
    const ellipseXradius = state.details.ellipseXradius;
    const ellipseYradius = state.details.ellipseYradius;
    const polygonSides = state.details.polygonSides;
    const polygonRadius = state.details.polygonRadius;

    const historyArray = [...state.history];

    if (state.shape === "rectangle") {
      localStorage.setItem(
        "shapeHistory",
        JSON.stringify([
          {
            shape: state.shape,
            details: {
              length: rectLength,
              width: rectWidth,
            },
          },
          ...historyArray,
        ])
      );
      return dispatch({
        type: UPDATE_HISTORY,
        payload: {
          shape: state.shape,
          details: {
            length: rectLength,
            width: rectWidth,
          },
        },
      });
    }

    if (state.shape === "square") {
      localStorage.setItem(
        "shapeHistory",
        JSON.stringify([
          {
            shape: state.shape,
            details: {
              length: squareLength,
            },
          },
          ...historyArray,
        ])
      );
      return dispatch({
        type: UPDATE_HISTORY,
        payload: {
          shape: state.shape,
          details: {
            length: squareLength,
          },
        },
      });
    }

    if (state.shape === "circle") {
      localStorage.setItem(
        "shapeHistory",
        JSON.stringify([
          {
            shape: state.shape,
            details: {
              radius: circleRadius,
            },
          },
          ...historyArray,
        ])
      );
      return dispatch({
        type: UPDATE_HISTORY,
        payload: {
          shape: state.shape,
          details: {
            radius: circleRadius,
          },
        },
      });
    }

    if (state.shape === "ellipse") {
      localStorage.setItem(
        "shapeHistory",
        JSON.stringify([
          {
            shape: state.shape,
            details: {
              radiusX: ellipseXradius,
              radiusY: ellipseYradius,
            },
          },
          ...historyArray,
        ])
      );
      return dispatch({
        type: UPDATE_HISTORY,
        payload: {
          shape: state.shape,
          details: {
            radiusX: ellipseXradius,
            radiusY: ellipseYradius,
          },
        },
      });
    }

    if (state.shape === "polygon") {
      localStorage.setItem(
        "shapeHistory",
        JSON.stringify([
          {
            shape: state.shape,
            details: {
              sides: polygonSides,
              radius: polygonRadius,
            },
          },
          ...historyArray,
        ])
      );
      return dispatch({
        type: UPDATE_HISTORY,
        payload: {
          shape: state.shape,
          details: {
            sides: polygonSides,
            radius: polygonRadius,
          },
        },
      });
    }
  };

  const resetForm = (e) => {
    resetDetails();
    offDrawn();
    setShape(e.target.value);
    setFillColor();
    setStrokeColor();
  };

  const changeHandler = (e) => {
    offDrawn();
    setDetails(e);
    setFillColor();
    setStrokeColor();
  };

  const resetHandler = () => {
    setStrokeColor();
    setFillColor();
  };

  return (
    <GlobalContext.Provider
      value={{
        shape: state.shape,
        details: state.details,
        drawn: state.drawn,
        fillColorArray: state.fillColorArray,
        strokeColorArray: state.strokeColorArray,
        fill: state.fill,
        stroke: state.stroke,
        history: state.history,
        clearShapeHistory,
        setFillColor,
        setStrokeColor,
        onDrawn,
        offDrawn,
        setShape,
        resetDetails,
        setDetails,
        submitHandler,
        resetForm,
        changeHandler,
        resetHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
