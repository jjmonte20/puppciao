import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import API from '../../utils/API';

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            error: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        API.createUser({
            username: this.state.username,
            password: this.state.password
            })
            .then((user) => {
                console.log(user);
                alert("You've made your account, now please log in");
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
                    <h1 className="header">Signup</h1>
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
                            Signup
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}

export default Signup;