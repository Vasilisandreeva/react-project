import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../service/posts.service";

export default function Posts() {
  let [post, setPost] = useState();
  useEffect(() => {
    getPosts().then(responce => setPost(responce))
  }, [])

  return (
    <div>
      {
        post.map(value => <Post key={value.id} item={value}/>)
      }
    </div>
  );
}