export default function Company(props) {
    const {name, catchPhrase, bs} = props.companyDetails
  return (
    <div className={'companyDetails'}>
    <ul>
        <li>{name}</li>
        <li>{catchPhrase}</li>
        <li>{bs}</li>
    </ul>
    </div>
  );
}