import {useEffect, useState} from "react";
import {getUsers} from "../../service/users.service";

export default function UserSelectComponent() {
const [users, setUsers] = useState([]);
useEffect(() => {
  getUsers().then(responce => setUsers(responce))
}, [])

  return (
    <div>
      <select>
        {
          users.map(value => <option value="">{value.name}</option>)
        }
      </select>

      </div>
  );
}