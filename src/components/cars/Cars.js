import Car from "../car/Car";
import {useEffect, useState} from "react";
import {saveCars} from "../../service/car.api.service";


export default function Cars() {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    saveCars().then(responce => setCars(responce))
  }, [])

  return (
    <div>
      {
        cars.map(value => <Car key={value.id} value={value}/>)
      }
    </div>
  );
}