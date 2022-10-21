import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie';
import { Col, Container, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast"
import FormLogin from "../components/FormLogin"

const Login = () => {
    // Initiate navigate
    const navigate = useNavigate()
    // Initiate state
    const [input, setInput] = useState({
        adminpetugasusername: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)
    const [cookies, setCookie] = useCookies("")

    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(cookies)
        setTimeout(() => {
            axios.post("https://dev-be.trijagabaya.co.id/api/login", input)
                .then((res) => {
                    toast.success("Login Successfully")
                    setLoading(false)
                    setCookie("accessToken", res.data.access_token, { path: "/" })
                    navigate("/")
                })
                .catch((err) => {
                    console.error(err)
                    toast.error(err.response.data.error)
                })
        }, 2000)


    }

    return (
        <Container style={{ color: "#015479" }}>
            <Toaster />
            <Row>
                <Col xs={12} md={6} className="py-5"
                    style={{ backgroundImage: `url("/login.png")`, minHeight: "100vh" }}
                >
                    <Row className="mt-5">
                        <h1 className="text-center mt-5">Welcome to react-satpam</h1>
                    </Row>
                    <Row>
                        <h3 className="text-center mx-auto w-75">Aplikasi untuk melihat daftar kegiatan satpam</h3>
                    </Row>
                </Col>
                <Col xs={12} md={6} className="py-md-5 mx-auto">
                    <Row className="mt-5"><h2 className="text-center mb-5">Login Now!</h2></Row>
                    <Row className="w-75 mx-auto">
                        <FormLogin
                            handleInput={handleInput}
                            handleSubmit={handleSubmit}
                            loading={loading}
                        />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Login