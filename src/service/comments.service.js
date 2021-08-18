let url = 'https://jsonplaceholder.typicode.com';

const getComments = () => {
    return fetch(url + '/comments').then(value => value.json())
}

export {getComments};