import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../gql/mutations";
import Alert from "react-bootstrap/Alert";
import Loading from "../Loading/Loading";

function Login() {
  const [formData, setFormData] = useState({});
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      localStorage.setItem("token", data.user.token);
      navigate("/quotes");
    },
  });
  const navigate = useNavigate();

  if (loading) return <Loading />

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser({
      variables: {
        loginData: formData,
      },
    });
  };
  return (
    <>
      <div className="container mt-5">
        <Container>
          <Form onSubmit={handleSubmit} className="container3">
            {error && (
              <Alert key="danger" variant="danger">
                {error.message}
              </Alert>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="outline-primary" type="submit">
              Submit
            </Button>
            <Form.Text className="text-muted link-log">
              <Link to="/signup">Do you have an account?</Link>
            </Form.Text>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Login;
