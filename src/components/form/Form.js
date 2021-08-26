import {saveCars} from "../../services/cars.api";

export default function Form({setCars, formData, setFormData}) {
    const saveCarForm = (f) => {
        f.preventDefault();
        saveCars(formData).then(data => setCars(data))
    }

  return (
    <div>
        <form onSubmit={saveCarForm}>
            <h3>Form for adding a car</h3>
            <input type="text" name={'model'} placeholder={'model'} minLength={1} maxLength={20}/>
            <input type="number" name={'price'} placeholder={'price'} min={0}/>
            <input type="number" name={'year'} placeholder={'year'} min={1990} max={2021}/>
            <button>Save</button>
        </form>
    </div>
  );
}