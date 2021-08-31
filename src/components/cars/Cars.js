import Car from "../car/Car";
import {useEffect, useState} from "react";
import {getCars} from "../../service/cars.service";

export default function Cars() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(response => setCars(response));
    }, [])

    return (
    <div>
        {
            cars.map(value => <Car key={value.id} item={value}/>)
        }
    </div>
  );
}