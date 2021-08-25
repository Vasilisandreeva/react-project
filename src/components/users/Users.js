import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.service";

export default function Users() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
  getUsers().then((response) => setUsers(response))
  }, []);

  return (
    <div>
      {
      users.map(item = <User key={item.id} item={item}/>)
    }
    </div>
  );
}