import Comment from "../comment/Coment";
import {useEffect, useState} from "react";
import {getComments} from "../../services/comments.service";

export default function Comments() {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    getComments().then(response => setComment(response))
  });

  return (
    <div>
      {
        comment.map(value => <Comment key={value.id} item={value}/>)
      }
    </div>
  );
}