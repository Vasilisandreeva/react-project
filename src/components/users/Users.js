import User from "./user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../service/users.service";
import {getPosts} from "../../service/posts.service";
import Posts from "../posts/Posts";



export default function Users() {

  let [user, setUser] = useState([]);
  let [posts, setPosts] = useState([]);

  useEffect(() =>{
    getUsers().then(response => setUser(response))
  }, []);

  const btnClick = (u) => {
    getPosts(u.id).then(response => setPosts(response))
  }

  return (
    <div className={'wrap'}>
      <div className={'users-box'}>
        {
          user.map(userItem => <User key={userItem.id} userItem={userItem} btnClick={btnClick}/>)
        }
      </div>
      <div className={'postBox'}>
        {
          posts.map(item => <Posts key={item.id} item={item}/>)
        }
      </div>
    </div>
  );
}