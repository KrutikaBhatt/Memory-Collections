import React from 'react';
import SinglePost from '../single_post/spost';
import useStyles from './styles';
import {useSelector} from 'react-redux';
import {Grid,CircularProgress} from '@material-ui/core';
const Posts  = ({setcurrentId}) =>{
    
    const style = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        !posts.length ?<CircularProgress /> :(
            <Grid className={style.container} container alignItems="stretch" spacing={3}>
                {posts.map((post)=>(
                   <Grid key={post._id} item xs={12} sm={6}>
                       <SinglePost post={post} setcurrentId={setcurrentId} />
                   </Grid> 
                ))}
            </Grid>
        )
    )
}

export default Posts;