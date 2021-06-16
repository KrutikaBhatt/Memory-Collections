import axios from 'axios';

const url = "http://localhost:8080/posts";

export const fetchData =() => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);