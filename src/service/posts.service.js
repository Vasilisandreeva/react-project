import axios from "axios";

let config = {baseURL: 'https://jsonplaceholder.typicode.com/posts'};
let axiosInstanse = axios.create(config);

const getPosts = () => axiosInstanse.get('')

export {getPosts}