import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./app.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    </Router>
  );
};

export default App;
