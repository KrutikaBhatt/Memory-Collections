import * as api from '../api';

//Creating Actions

const getPosts =()=> async(dispatch) =>{
    const action ={type:'FETCH_ALL',payload:[]}
    dispatch(action);
}

export default getPosts;