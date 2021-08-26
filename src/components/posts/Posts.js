import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.service";

export default function Posts() {
const [post, setPost] = useState([]);
useEffect(() => {
    getPosts().then(response => setPost(response))
},[])

  return (
    <div>
        {
            post.map(value => <Post key={value.id} item={value}/>)
        }
    </div>
  );
}