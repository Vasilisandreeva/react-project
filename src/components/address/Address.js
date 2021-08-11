import Geo from "../geo/Geo";

export default function Address(props) {
    const {street, suite, city, zipcode, geo} = props.info
  return (
    <div className={'info'}>
    <ul>
        <li>{street}</li>
        <li>{suite}</li>
        <li>{city}</li>
        <li>{zipcode}</li>
        <li>Geo:<Geo geoInfo={geo}/></li>
    </ul>
    </div>
  );
}