import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Jumbotron fluid>
        <Container>
          <h1> Welcome to my CPSC 2600 Project!</h1>
          <p>
            This project consits in a full stack web application making use of
            the MERN stack.
          </p>
          <p>
            The client side is a single page web application implemeted using
            React and other dependencies like React-Bootstrap and React Router.
            Some of the code for the components were started using example code
            from the{" "}
            <a href="https://react-bootstrap.netlify.app/">
              React-Bootstrap documentation page.
            </a>
          </p>
          <p>
            The server side is an API implemented using JavaScript frameworks
            such as node.js, express and mongoose. Server side validation was
            made making use of express-validator. The database is stored in the
            MongoDB.
          </p>
        </Container>
      </Jumbotron>
    </Container>
  );

};

export default Home;
