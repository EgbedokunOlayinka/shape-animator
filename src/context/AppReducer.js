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

export default (state, action) => {
  switch (action.type) {
    case CLEAR_SHAPE_HISTORY:
      return {
        ...state,
        history: [],
      };
    case SET_FILL:
      return {
        ...state,
        fill: action.payload,
      };
    case SET_STROKE:
      return {
        ...state,
        stroke: action.payload,
      };
    case ON_DRAWN:
      return {
        ...state,
        drawn: true,
      };
    case OFF_DRAWN:
      return {
        ...state,
        drawn: false,
      };
    case SET_SHAPE:
      return {
        ...state,
        shape: action.payload,
      };
    case SET_DETAILS:
      return {
        ...state,
        details: { ...state.details, [action.payload.ppt]: action.payload.val },
      };
    case RESET_DETAILS:
      return {
        ...state,
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
      };
    case UPDATE_HISTORY:
      return {
        ...state,
        history: [action.payload, ...state.history],
      };
    default:
      return state;
  }
};
