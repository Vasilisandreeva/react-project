import axios from "axios";

let config = {baseURL: 'https://jsonplaceholder.typicode.com/comments'};

let axioxInstance = axios.create(config);

const getComment = () => axioxInstance.get('');

export {getComment};