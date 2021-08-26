import Car from "../car/Car";
import {getCars} from "../../services/cars.api";
import {useEffect} from "react";

export default function Cars({cars, setCars}) {

  useEffect(() => {
    getCars().then(value => setCars(value))
  }, [])

  return (
    <div>
      {
     cars.map(value => <Car key={value.id} item={value}/>)
      }
    </div>
  );
}