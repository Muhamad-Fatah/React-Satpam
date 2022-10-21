import { Button, Form, Spinner } from "react-bootstrap"
import React from "react"

const FormLogin = ({ handleSubmit, handleInput,loading }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required onChange={handleInput} name="adminpetugasusername" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required onChange={handleInput} name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Button className="w-50 mx-auto d-block text-center" variant="primary" type="submit">
                {loading ? <Spinner animation="border" /> : "Submit"}
            </Button>
        </Form>
    )
}

export default FormLogin