import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { FormControl, RadioGroup, Radio, makeStyles, FormLabel, FormControlLabel, Grid, Container, Button } from "@material-ui/core";
import Questions from "./questions";
import "./styles.css";

const useStyles = makeStyles(theme => ({
    
}));

class Quiz extends Component {
    state = {
        Answers: [0,0,0,0,0,0,0,0,0,0]
    }

    componentDidMount(){ 
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit = () => {
        console.log(this.state.Answers);
    }

    isDisabled = () => {
        if (this.state.Answers.includes(0)){
            return true;
        } else {
            return false;
        }
    }

    renderQuestions = () => {
        return (
            <Container>
                {Questions.map((q,i) => (
                    <Grid
                    container
                    justify="flex-start"
                    alignItems="center"
                    className="quizQ">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">{q.qBlob}</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                className="myRadios"
                                value={this.state.Answers[i]}
                                name={q.id}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    let answers = this.state.Answers;
                                    answers[i] = parseInt(val);
                                    this.setState({
                                        Answers: answers
                                    });
                                }}
                                >
                            {q.a.map(a => (
                                <FormControlLabel value={a.val} control={<Radio color="primary" />} label={a.desc} />
                            ))}
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                ))}
                <Grid
                justify="center"
                alignItems="center"
                className="submit">
                    <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => this.handleSubmit()}
                    disabled={this.isDisabled()}>Submit</Button>
                </Grid>
            </Container>
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

export default withStyles(useStyles)(Quiz);