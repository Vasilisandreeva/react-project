import {createRef, useState} from "react";

export default function Form() {


let onFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submit');
    console.log(e.target.cars.value);
    console.log(e.target.models.value);
    let carToSave = {cars: e.target.cars.value, models: e.target.models.value};
    console.log(carToSave)
}

  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <input type="text" name={'cars'} placeholder={'cars'}/>
            <input type="price" name={'models'} placeholder={'models'}/>
            <button>Save</button>
        </form>
    </div>
  );
}