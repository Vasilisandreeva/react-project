import Comment from "../coment/comment";
import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.service";

export default function Comments() {

  let [comment, setComments] = useState([]);

  useEffect(() => {
    getComments().then(({data}) => setComments([...data]));
  }, [])

  return (
    <div>
      {
        comment.map(value => <Comment item={value} key={value.id}/>)
      }
    </div>
  );
}