import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../service/users.service";

export default function Users() {
  let [user, setUsers] = useState([])
  useEffect(() => {
    getUsers().then(responce => setUsers(responce))
  }, [])

  return (
    <div>
      {
        user.map(value => <User key={value.id} item={value}/>)
      }
    </div>
  );
}