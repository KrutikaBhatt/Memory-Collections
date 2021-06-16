import React from 'react';
import SinglePost from '../single_post/spost';
import useStyles from './styles';
import {useSelector} from 'react-redux';
const Posts  = () =>{
    
    const style = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        <>
        <SinglePost />  
        <SinglePost />
        </>
    )
}

export default Posts;