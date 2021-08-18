import Comment from "../comment/Comment";
import {useEffect, useState} from "react";
import {getComments} from "../../service/comments.service";

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [chosenComments, setChosenComments] = useState(null);
    console.log(chosenComments)
    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, [])

    return (
    <div>
        {
            chosenComments &&
            <div>
                <p>email: {chosenComments.email}</p>
                <p>body: {chosenComments.body}</p>
            </div>
        }
        {
            comments.map(value => <Comment key={value.id} item={value} setChosenComments={setChosenComments}/>)
        }
    </div>
  );
}