const saveCars = () => {
    fetch('http://195.72.146.25/api/v1/cars', {
    method: 'POST',
        body: JSON.stringify({
            id: 40,
            model: "seat",
            price: 2300,
            year: 2018,
        }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}
export {saveCars}