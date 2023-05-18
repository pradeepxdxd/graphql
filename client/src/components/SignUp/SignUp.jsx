import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "../../gql/mutations";
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";
import Loading from '../Loading/Loading'

function SignUp() {
    const [formData, setFormData] = useState({});
    const [signupUser, { data, loading, error }] = useMutation(SIGNUP_USER);

    if (loading) return <Loading />

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signupUser({
            variables : {
                newUser : formData
            }
        });
    };
    return (
        <>
            <div className="container mt-5">
                <Container>
                    <Form onSubmit={handleSubmit} className="container3">
                        {error &&
                            <Alert key='danger' variant='danger'>
                                {error.message}
                            </Alert>
                        }
                        {data && data.user &&
                            <Alert key='success' variant='success'>
                                Registeration Successfull
                            </Alert>
                        }
                        <Form.Group className="mb-3" controlId="first">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your First Name" name="firstName" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="last">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text" placeholder="Enter Your Last Name" name="lastName" onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Email" name="email" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Your Password" name="password" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Phone" name="phone" onChange={handleChange}/>
                        </Form.Group>
                        <Button variant="outline-danger" type="submit">
                            Sign Up
                        </Button>
                        <Form.Text className="text-muted link-sign">
                            <Link to="/login" style={{ color: "red" }}>
                                signin!
                            </Link>
                        </Form.Text>
                    </Form>
                </Container>
            </div>
        </>
    );
}

export default SignUp;
