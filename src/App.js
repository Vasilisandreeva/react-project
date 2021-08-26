import './App.css';
import Cars from "./components/cars/Cars";
import Form from "./components/form/Form";
import {useState} from "react";

function App() {
    const [cars, setCars] = useState(null)
    const [formData, setFormData] = useState({model: '', price: '', year: ''})

    return (
    <div>
        <Form setCars={setCars} formData={formData} setFormData={setFormData}/>
        <Cars cars={cars} setCars={setCars} setFormData={setFormData}/>
    </div>
  );
}

export default App;
