import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../service/posts.service";

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().than(responce => setPosts(responce))
    }, [])

  return (
    <div>
        {
            posts.map(item => <Post key={item.id} item={item}/>)
        }
    </div>
  );
}