import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form, Button } from "react-bootstrap";
import CustomFormOptions from "./CustomFormOptions";

const CustomForm = () => {
  const { shape, submitHandler, resetForm } = useContext(GlobalContext);

  return (
    <Form className="mt-3" onSubmit={(e) => submitHandler(e)}>
      <Form.Group controlId="shape-select">
        <Form.Label>Select shape</Form.Label>
        <Form.Control as="select" value={shape} onChange={(e) => resetForm(e)}>
          <option value="rectangle">Rectangle</option>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
          <option value="ellipse">Ellipse</option>
          <option value="polygon">Polygon</option>
        </Form.Control>
      </Form.Group>

      <CustomFormOptions />

      <Button variant="primary" type="submit" className="btn btn-block mb-3">
        Submit
      </Button>
    </Form>
  );
};

export default CustomForm;
