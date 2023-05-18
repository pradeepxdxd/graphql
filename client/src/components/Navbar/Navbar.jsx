import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Nav_bar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          {
            token ? <>
              <Navbar.Brand as={Link} to="/quotes">
                Quotes
              </Navbar.Brand>
            </> : <>
              <Navbar.Brand as={Link} to="/">
                Navbar
              </Navbar.Brand>
            </>
          }
          <Nav className="me-auto">
            {token ? (
              <>
                <div className="d-flex">
                  <Nav.Link as={Link} to="/profile">
                    Profile
                  </Nav.Link>
                  <Nav.Link as={Link} to="/create-quotes">
                    Create
                  </Nav.Link>
                </div>
                <Button variant="outline-primary" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <div className="d-flex">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Signup
                  </Nav.Link>
                </div>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
