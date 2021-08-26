import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import Cars from "./components/cars/Cars";
import Create from "./components/createCar/Create";
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <Link to={'/'}>To default page</Link>
          <br/>
          <Link to={'/cars'}>Cars</Link>
          <br/>
          <Link to={'/create-car'}>Create car</Link>
          <br/>

          <Route path={'/cars'}>
            <h3>Cars</h3>
            <Cars/>
          </Route>
          <Route path={'/create-car'}>
            <h3>Create car</h3>
            <Create/>
          </Route>
        </div>
      </Router>
  );
}

export default App;
