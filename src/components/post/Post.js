import Comments from "../comments/Comments";
import {useEffect, useState} from "react";
import {getComment} from "../../service/comment.service";

export default function Post({item}) {

    let [comment, setComment] = useState([]);
    useEffect(() => {
        getComment().then(({data}) => setComment([...data]))
    }, [])

    return (
        <div>
            {item.body}
            <p>{comment.map(value => <Comments key={value.id} item={value}/>)}</p>
        </div>
    );
}