let url = 'http://91.201.233.14/api/v1/cars'

const getCars = () => {
    return  fetch(url, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

const saveCars = (sCar) => {
    return  fetch(url, {
        method: 'POST',
        body: JSON.stringify(sCar),
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

const editCar = (sCar) => {
    return fetch('http://91.201.233.14/api/v1/cars/' + sCar.id, {
        method: 'PUT',
            body: JSON.stringify(sCar),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(() => getCars())
}




export {getCars, saveCars, deleteCar, editCar}