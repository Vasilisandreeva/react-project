import Car from "../car/Car";
import {useEffect, useState} from "react";
import {getCars} from "../../service/car.api.service";


export default function Cars() {
    const [cars, setCars] = useState(null);

    useEffect(() => {
        getCars().then(responce => setCars(responce))
    }, [])

    return (
        <div>
            {
                cars && cars.map(value => <Car key={value.id} item={value}/>)
            }
        </div>
    );
}