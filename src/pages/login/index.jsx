import React, { Component } from "react";
import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import './css/login.scss';
import ReCAPTCHA from "react-google-recaptcha";

class Index extends Component {
    render() {
        return (
            <div className="d-background d-flex align-items-center "
            style={{ backgroundImage: 'url(https://via.placeholder.com/1000)'}}>
                <Container fluid className="px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                    <Row className="d-flex">
                        <Col md={7} xs={12} className="hidden-xs d-flex">
                            <div className="d-flex align-items-start flex-column">
                                <div>
                                    <Image src="https://via.placeholder.com/1000" className="logo" />
                                </div>
                                <div className="mb-auto mt-auto">
                                    <h1 className="d-title mb-0">
                                        Media Locatization<br/>Management Platform
                                    </h1>
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <Image src="https://via.placeholder.com/1000" className="logo-footer" />
                                        </div>
                                        <div className="align-items-center d-flex">
                                            <h6 className="mb-0">Managed by TUJJU</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={5} xs={12}>
                            <div className="d-card card border-0 px-4 py-5">
                                <Row className="justify-content-center mb-5">
                                    <Image src="https://via.placeholder.com/1000" className="logo-company" roundedCircle />
                                </Row>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Username / Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasic">
                                        <Form.Text>
                                            <b>Forgot Password?</b>
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasic">
                                        <ReCAPTCHA className="g-recaptcha"
                                            sitekey="Your client site key"
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" size="lg" className="w-100 mb-3">
                                        Sign In
                                    </Button>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember Me" />
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
 
export default Index