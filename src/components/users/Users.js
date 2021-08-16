import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";

export default function Users() {
    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(response => setUsers(response))
    }, []);

    return (
        <div>
            {
                users.map(userItem => <User key={userItem.id} userItem={userItem}/>)
            }
        </div>
    );
}