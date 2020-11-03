import { unmountComponentAtNode } from "react-dom";
import React from "react";
import { render } from "@testing-library/react";

import App from "../App";
import CustomForm from "../components/CustomForm";
import CustomFormOptions from "../components/CustomFormOptions";
import FillColor from "../components/FillColor";
import StrokeColor from "../components/StrokeColor";
import Header from "../components/Header";
import History from "../components/History";
import Shape from "../components/Shape";
import ShapeContainer from "../components/ShapeContainer";

let div = null;
beforeEach(() => {
  div = document.createElement("div");
  document.body.appendChild(div);
});

afterEach(() => {
  unmountComponentAtNode(div);
  div.remove();
  div = null;
});

describe("App", () => {
  test("renders App component without crashing", () => {
    render(<App />, div);
  });
});

describe("CustomForm", () => {
  test("renders CustomForm component without crashing", () => {
    render(<CustomForm />, div);
  });
});

describe("CustomFormOptions", () => {
  test("renders CustomFormOptions component without crashing", () => {
    render(<CustomFormOptions />, div);
  });
});

describe("FillColor", () => {
  test("renders FillColor component without props", () => {
    render(<FillColor />, div);
  });

  test("renders FillColor component correctly with color prop", () => {
    render(<FillColor color="#ffffff" />, div);
  });
});

describe("StrokeColor", () => {
  test("renders StrokeColor component without props", () => {
    render(<StrokeColor />, div);
  });

  test("renders StrokeColor component correctly with color prop", () => {
    render(<StrokeColor color="#ffffff" />, div);
  });
});

describe("Header", () => {
  test("renders Header component without crashing", () => {
    render(<Header />, div);
  });
});

describe("History", () => {
  test("renders History component without crashing", () => {
    render(<History />, div);
  });
});

describe("Shape", () => {
  test("renders Shape component without crashing", () => {
    render(<Shape />, div);
  });
});

describe("ShapeContainer", () => {
  test("renders ShapeContainer component without crashing", () => {
    render(<ShapeContainer />, div);
  });
});
