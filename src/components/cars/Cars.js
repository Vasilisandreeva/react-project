import {useEffect, useState} from "react";
import {getCars} from "../../service/cars.service";
import Car from "../car/Car";

export default function Cars() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(responce => setCars(responce));
        console.log(setCars)
    }, [])

    return (
    <div>
        {
            cars.map(value => <Car key={value.model} item={value}/>)
        }
    </div>
  );
}