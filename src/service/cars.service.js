let url = 'http://192.168.1.253/api/v1/cars';

const getCars = () => {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}

const createCar = () => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((responce) => responce.json())
        .then((json) => console.log(json))
}
export {getCars, createCar}