import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../components/Form/LoginForm';
import Signup from '../components/Form/Signup';

class Home extends Component {
    state = {

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="header">Please login or signup</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <LoginForm></LoginForm>
                    </Col>
                    <Col>
                        <Signup></Signup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;