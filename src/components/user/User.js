import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../service/posts.service";

export default function User({userItem}) {
  let {name, id, username, email, phone, website} = userItem;

  let [post, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(({data}) => setPosts([...data]));
  }, [])

  return (
    <div>
      <h3>{id} - {name}</h3>
      <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>{phone}</li>
        <li>{website}</li>
      </ul>
      <p>{post.map(value => <Post key={value.id} item={value}/>)}</p>
    </div>
  );
}