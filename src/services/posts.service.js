import axios from 'axios';

let config = {baseURL: 'https://jsonplaceholder.typicode.com/users'};
let axiosInstance = axios.create(config);

const getPostOfUser = () => {return axiosInstance.get('')};
const getPostsOfUser = (id) => {return axiosInstance.get('/' + id + '/posts')};

export {getPostOfUser, getPostsOfUser};

