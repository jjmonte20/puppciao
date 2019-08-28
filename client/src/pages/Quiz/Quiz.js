import React, { Component } from "react";
import Questions from "./questions";

class Quiz extends Component {
    state = {

    }

    componentDidMount(){
        
    }

    renderQuestions = () => {
        return (
            <div>
                {Questions.map(q => (
                    <div>
                        <h3>{q.qBlob}</h3>
                        {q.a.map(a => (
                            <p>{a.desc}</p>
                        ))}
                    </div>
                ))}
            </div>
        )
    }

    render() {
        return(
            <div>
                {this.renderQuestions()}
            </div>
        )
    }
}

export default Quiz;