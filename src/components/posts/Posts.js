import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../service/posts.service";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [chosenPost, setChosenPost] = useState(null);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, []);

    return (
        <div>
            {
                chosenPost &&
                <div>
                    <p>id: {chosenPost.id}</p>
                    <p>title: {chosenPost.title}</p>
                    <p>body: {chosenPost.body}</p>
                </div>
            }
            {
                posts.map(value => <Post key={value.id} item={value} setChosenPost={setChosenPost}/>)
            }
        </div>
    );
}
