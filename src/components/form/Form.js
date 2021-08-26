import {editCar, saveCars} from "../../services/cars.api";

export default function Form({setCars, formData, setFormData}) {
    const saveCarForm = (f) => {
        f.preventDefault();
        formData.id
        ? editCar(formData).then(data => setCars(data))
        : saveCars(formData).then(data => setCars(data))
        setFormData({model: '', price: '', year: ''})
    }
    const change = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

  return (
    <div>
        <form onSubmit={saveCarForm}>
            <h3>Form for adding a car</h3>
            <input onChange={change} value={formData.model} type="text" name={'model'} placeholder={'model'} minLength={1} maxLength={20}/>
            <input onChange={change} value={formData.price} type="number" name={'price'} placeholder={'price'} min={0}/>
            <input onChange={change} value={formData.year} type="number" name={'year'} placeholder={'year'} min={1990} max={2021}/>
            <button>Save</button>
        </form>
    </div>
  );
}