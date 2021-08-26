let url = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => {
    return fetch(url).then(respnce => respnce.json())

}
export {getUsers}