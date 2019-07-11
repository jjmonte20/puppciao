import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import API from '../../utils/API';

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            user: '',
            error: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        API.loginUser(this.state)
            .then((user) => {
                this.setState({ user: user.data });
                console.log(this.state.user);
            })
            .catch(() => {
                console.log("Please check email or password");
            })
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <h1 className="header">Login</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" name="username" onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleInputChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}

export default LoginForm;