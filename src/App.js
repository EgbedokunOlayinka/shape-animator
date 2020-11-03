import React from "react";
import "./App.css";
import Header from "./components/Header";
import CustomForm from "./components/CustomForm";
import ShapeContainer from "./components/ShapeContainer";
import History from "./components/History";
import { Container, Row, Col } from "react-bootstrap";

import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Container fluid="md" className="py-3">
        <Header />
        <CustomForm />
        <Row>
          <Col md={6}>
            <ShapeContainer />
          </Col>
          <Col md={6}>
            <History />
          </Col>
        </Row>
      </Container>
    </GlobalProvider>
  );
};

export default App;
