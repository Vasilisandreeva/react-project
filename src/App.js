import './App.css';
import Form from "./components/Form";
import Cars from "./components/cars/Cars";
import {useState} from "react";

function App() {
    const [cars, setCars] = useState(null);
    const [formData, setFormData] = useState({model: 'sdf', price: '1', year: ''})

    return (
        <div>
            <Form setCars={setCars} formData={formData} setFormData={setFormData}/>
            <Cars cars={cars} setCars={setCars} setFormData={setFormData}/>
        </div>
    );
}

export default App;
