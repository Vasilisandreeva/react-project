import Car from "../car/Car";
import {useEffect} from "react";
import {deleteCar, getCars} from "../../services/cars.api";

export default function Cars({cars, setCars, setFormData}) {

  useEffect(() => {
    getCars().then(value => setCars(value))
  }, [])

  const btnOnClickDelete = (d) => {
    deleteCar(d).then(response => setCars(response))
  }

  return (
    <div>
      {
     cars && cars.map(value => <Car key={value.id} item={value} btnOnClickDelete={btnOnClickDelete} setFormData={setFormData}/>)
      }
    </div>
  );
}