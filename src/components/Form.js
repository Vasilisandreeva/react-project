import {saveCars} from "../service/car.api.service";

export default function Form() {


let saveCarForm = (e) => {
    e.preventDefault();
    let carToSave = {car: e.target.car.value, model: e.target.model.value, year: e.target.year.value};
    saveCars(carToSave);
}

// let  carTemp = {
//     model: carModel,
//     price: +carPrice,
//     year: +carYear
// }

  return (
    <div>
        <form onSubmit={saveCarForm}>
            <h3>Form for adding a car</h3>
            <input type="text" name={'car'} placeholder={'car'}/>
            <input type="number" name={'model'} placeholder={'model'}/>
            <input type="number" name={'year'} placeholder={'year'}/>
            <button>Save</button>
        </form>

    </div>
  );
}