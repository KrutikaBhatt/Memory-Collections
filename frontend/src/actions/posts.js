import * as api from '../api';

//Creating Actions

export const getPosts =()=> async(dispatch) =>{

    try {
        const {data} = await api.fetchData();
        const action ={type:'FETCH_ALL',payload:data};
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
};

export const createPosts =(post_new) =>async(dispatch) =>{
    try {
        const {data} = await api.createPost(post_new);
        dispatch({type:'CREATE',payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id,newPost) =>async(dispatch) =>{
    try {
        const {data} = await api.updatePost(id,newPost);
        dispatch({type:'UPDATE',payload: data});
    } catch (error) {
        console.log(error.message);
    }
}