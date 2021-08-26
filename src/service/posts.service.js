let url = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = () => {
    return fetch(url).then(responce => responce.json())
}
export {getPosts}