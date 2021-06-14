import React from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
const App =()=>{
    return(
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h3" align="center">Memory Collection 
                <img src="/images/memory_logo.png" alt="memories" height="60" width="60"/>
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            Posts area
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            Form area
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}
export default App;