import React,{useEffect,useState} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import Posts from './components/posts/post';
import Form from './components/form/form';
import useStyles from './styles';
//  use React hooks
import {useDispatch} from 'react-redux';
//Get the actions
import {getPosts} from './actions/posts';

const App =()=>{

    const style = useStyles();
    const dispatch = useDispatch();
    const [currentId,setcurrentId] = useState(null);

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId , dispatch]);

    return(
        <Container maxWidth="lg">
            <AppBar className ={style.appBar} position="static" color="inherit">
                <Typography className={style.heading} variant="h3" align="center">Memory Collection 
                </Typography>
                <img className={style.image} src="/images/memory_logo.png" alt="memories" height="60" width="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={style.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setcurrentId={setcurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId ={currentId} setcurrentId={setcurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}
export default App;