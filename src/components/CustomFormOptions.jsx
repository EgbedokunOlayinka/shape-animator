import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form, Col } from "react-bootstrap";

const CustomFormOptions = () => {
  const { shape, details, changeHandler } = useContext(GlobalContext);

  switch (shape) {
    case "rectangle":
      return (
        <Form.Row>
          <Form.Group as={Col} controlId="rect-length">
            <Form.Label>Length</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter rectangle length"
              min="1"
              max="285"
              name="rectLength"
              value={details.rectLength}
              onChange={(e) => changeHandler(e)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="rect-width">
            <Form.Label>Width</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter rectangle width"
              min="1"
              max="285"
              name="rectWidth"
              value={details.rectWidth}
              onChange={(e) => changeHandler(e)}
              required
            />
          </Form.Group>
        </Form.Row>
      );
    case "square":
      return (
        <Form.Row>
          <Form.Group as={Col} controlId="square-length">
            <Form.Label>Length</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter square length"
              min="1"
              max="285"
              name="squareLength"
              value={details.squareLength}
              onChange={(e) => changeHandler(e)}
              required
            />
          </Form.Group>
        </Form.Row>
      );
    case "circle":
      return (
        <Form.Row>
          <Form.Group as={Col} controlId="circle-radius">
            <Form.Label>Radius</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter circle radius"
              min="1"
              max="150"
              name="circleRadius"
              value={details.circleRadius}
              onChange={(e) => changeHandler(e)}
              required
            />
          </Form.Group>
        </Form.Row>
      );
    case "ellipse":
      return (
        <Form.Row>
          <Form.Group as={Col} controlId="ellipse-x-radius">
            <Form.Label>X-Radius</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter x-axis ellipse radius"
              min="1"
              max="150"
              name="ellipseXradius"
              value={details.ellipseXradius}
              onChange={(e) => changeHandler(e)}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="ellipse-y-radius">
            <Form.Label>Y-Radius</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter y-axis ellipse radius"
              min="1"
              max="150"
              name="ellipseYradius"
              value={details.ellipseYradius}
              onChange={(e) => changeHandler(e)}
              required
            />
          </Form.Group>
        </Form.Row>
      );
    case "polygon":
      return (
        <Form.Row>
          <Form.Group as={Col} controlId="polygon-sides">
            <Form.Label>Number of sides</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter number of sides"
              min="3"
              max="9"
              name="polygonSides"
              value={details.polygonSides}
              onChange={(e) => changeHandler(e)}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="polygon-radius">
            <Form.Label>Radius</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter polygon radius"
              min="1"
              max="150"
              name="polygonRadius"
              value={details.polygonRadius}
              onChange={(e) => changeHandler(e)}
              required
            />
          </Form.Group>
        </Form.Row>
      );
    default:
      return <></>;
  }
};

export default CustomFormOptions;
