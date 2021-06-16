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

// export default getPosts;