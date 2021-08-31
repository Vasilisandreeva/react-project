let url = 'http://91.201.233.14/api/v1/cars';

const getCars = () => {
    return fetch(url, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
}

const createCar = (saveCar) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(saveCar),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(() => getCars())
}
export {getCars, createCar}