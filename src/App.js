import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Content from "./components/Content";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Content />
      </Container>
    </BrowserRouter>
  );
}
