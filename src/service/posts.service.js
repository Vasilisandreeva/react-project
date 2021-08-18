let url = 'https://jsonplaceholder.typicode.com/';

const getPosts = (id) => {
    return fetch(url + '/' + id + '/posts').then(value => value.json());
}

export {getPosts};