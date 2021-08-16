import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.service";

export default function Posts() {
    let [post, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(({data}) => setPosts([...data]));
    }, [])

    return (
        <div>
            {
                post.map(value => <Post item={value} key={value.id}/>)
            }
        </div>
    );
}
