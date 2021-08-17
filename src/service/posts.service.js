let url = 'https://jsonplaceholder.typicode.com/';

const getPosts = (id) => {
    return fetch(url+ 'users/' + id + '/posts').then(value => value.json());
}

export {getPosts};