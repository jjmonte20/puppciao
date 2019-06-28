import React, { Component } from 'react';
import { createStore } from 'redux';
import { Container } from 'react-bootstrap';

class Homepage extends Component {
    render() {

        // step 2 : Reducer : state and action
        const reducer = function(state, action) {
            if(action.type === "ATTACK") {
                return action.payload
            }
            if(action.type === "GREEN ATTACK") {
                return action.payload
            }
            return state;
        }
        // step 1 store: reducer and state
        const store = createStore(reducer, "Peace");
        

        // step 3 : subscribe

        store.subscribe(() => {
            console.log("Store is now", store.getState());
        })

        // step 4 : dispatch action

        store.dispatch({type: "ATTACK", payload: "Iron Man"})
        store.dispatch({type: "GREEN ATTACK", payload: "Hulk"})

        return (
            <Container>
                <h1>Welcome to the homepage</h1>
            </Container>
        )
    }
}

export default Homepage;