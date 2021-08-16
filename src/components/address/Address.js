export default function Address({address: {city, street, suite, zipcode}}) {
  return (
    <div>
     <ul>
         <li> City -{city}</li>
         <li>Street - {street}, suite - {suite}</li>
         <li>Zipcode - {zipcode}</li>
     </ul>
    </div>
  );
}