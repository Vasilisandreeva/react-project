const saveCars = (sCar) => {
    return  fetch('http://91.201.233.14/api/v1/cars', {
    method: 'POST',
    body: JSON.stringify(sCar),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
        .then(() => getCars())
}

const putCar = (sCar) => {
    return  fetch('http://91.201.233.14/api/v1/cars/' + sCar.id, {
    method: 'PUT',
    body: JSON.stringify(sCar),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
        .then(() => getCars())
}

const getCars = () => {
    return  fetch('http://91.201.233.14/api/v1/cars', {
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
        .then((response) => response.json())
}

const editCar = (id) => {
    return fetch('http://91.201.233.14/api/v1/cars/' + id, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(() => getCars())
}

const deleteCar = (id) => {
    return  fetch('http://91.201.233.14/api/v1/cars/' + id, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(() => getCars())
}

export {saveCars, getCars, editCar, deleteCar, putCar}