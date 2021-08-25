import './App.css';
import Cars from "./components/cars/Cars";
import Form from "./components/form/Form";
import {useState} from "react";

function App() {
    const [cars, setCars] = useState(null)
  return (
    <div>
        <Form setCars={setCars}/>
        <Cars cars={cars} setCars={setCars}/>
    </div>
  );
}

export default App;
