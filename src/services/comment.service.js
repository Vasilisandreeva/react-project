import axios from "axios";

let config = {baseURL: 'https://jsonplaceholder.typicode.com/comments'};
let axiosInstance = axios.create(config);

const getComments = () => axiosInstance.get('');

export {getComments};