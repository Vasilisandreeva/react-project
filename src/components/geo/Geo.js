export default function Geo(props) {
    const {lat, lng} = props.geoInfo
  return (
    <div>
    <ul>
        <li>{lat}</li>
        <li>{lng}</li>
    </ul>
    </div>
  );
}