import axios from 'axios';

const url = 'http://localhost:5000/app/post';

export const fetchPost = () => axios.get(url);
export const createPost = () => axios.post(url, 'newPost');
