import {saveCars} from "../service/car.api.service";

export default function Form() {


let saveCarForm = (e) => {
    e.preventDefault();
    let carToSave = {car: e.target.car.value, model: e.target.model.value, year: e.target.year.value};
    saveCars(carToSave);
}


  return (
    <div>
        <form onSubmit={saveCarForm}>
            <h3>Form for adding a car</h3>
            <input type="text" name={'model'} placeholder={'model'} minLength={1} maxLength={20}/>
            <input type="number" name={'price'} placeholder={'price'} />
            <input type="number" name={'year'} placeholder={'year'} min={1990} max={2021}/>
            <button>Save</button>
        </form>

    </div>
  );
}