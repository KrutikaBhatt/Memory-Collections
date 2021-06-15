import React from 'react';
import SinglePost from '../single_post/spost';
import useStyles from './styles';
const Posts  = () =>{
    
    const style = useStyles();
    return (
        <>
        <SinglePost />  
        <SinglePost />
        </>
    )
}

export default Posts;