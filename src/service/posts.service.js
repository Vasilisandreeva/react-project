let url = 'https://jsonplaceholder.typicode.com';

const getPosts = () => {
    return fetch(url + '/posts').then(value => value.json());
}

export {getPosts};