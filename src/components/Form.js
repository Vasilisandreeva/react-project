import {putCar, saveCars} from "../service/car.api.service";
import {useState} from "react";

export default function Form({setCars, setFormData, formData}) {
    let saveCarForm = (e) => {
        e.preventDefault();
        formData.id
            ? putCar(formData).then(data => setCars(data))
            : saveCars(formData).then(data => setCars(data))

        setFormData({model: '', price: '', year: ''})
    }

    const qqqq = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <form onSubmit={saveCarForm}>
                <h3>Form for adding a car</h3>
                <input onChange={qqqq} value={formData.model} type="text" name={'model'} placeholder={'model'}
                       minLength={1} maxLength={20}/>
                <input onChange={qqqq} value={formData.price} type="number" name={'price'} placeholder={'price'}
                       min={0}/>
                <input onChange={qqqq} value={formData.year} type="number" name={'year'} placeholder={'year'} min={1990}
                       max={2021}/>
                <button>Save</button>
            </form>

        </div>
    );
}