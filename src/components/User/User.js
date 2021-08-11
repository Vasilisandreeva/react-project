import Address from "../address/Address";

export default function User (props) {
  const {id, name, username, email, address, phone, website, company} = props.person
  return (
    <div className={'person'}>
    <h2>{id} - {name} {username}</h2>
      <ul>
        <li>{email}</li>
        <li>Address: <Address info={address}/></li>
        <li>{phone}</li>
        <li>{website}</li>
        {/*<li>{company}</li>*/}
      </ul>
    </div>
  );
}