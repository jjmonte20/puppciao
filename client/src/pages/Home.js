import React, { Component } from "react";
import { Box, Container, Grid } from "@material-ui/core";

class Home extends Component {
    render() {
        return(
            <Box>
                <Container>
                    <Grid item spacing={1}>
                    <h1>Welcome to puppyciao</h1>
                    </Grid>
                </Container>
            </Box>
        );
    }
}

export default Home;