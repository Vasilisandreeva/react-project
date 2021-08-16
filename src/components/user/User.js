import Address from "../address/Address";
import Company from "../company/Company";

export default function User({userItem}) {
  let {address, phone, username, website, company} = userItem;

  return (
      <div>
        <h2>{userItem.id} - {userItem.name}</h2>
        <p>{username}</p>
        <p>{phone}</p>
        <p>{website}</p>
        <Address address={address}/>
        <Company company={company}/>
      </div>
  )
}