import Car from "../car/Car";
import {useEffect} from "react";
import {deleteCar, getCars} from "../../service/car.api.service";


export default function Cars({setCars, cars, setFormData}) {
    useEffect(() => {
        getCars().then(responce => setCars(responce))
    }, [])

    const onClickDeleteBtn = (d) => {
        deleteCar(d).then(responce => setCars(responce))
    }

    return (
        <div>
            {
                cars && cars.map(value => <Car key={value.id} item={value} onClickDeleteBtn={onClickDeleteBtn} setFormData={setFormData}/>)
            }
        </div>
    );
}
