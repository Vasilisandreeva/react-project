import Comments from "../comments/Comments";

export default function Post({item}) {

    return (
        <div>
            {item.body}

            <p><Comments/></p>
        </div>
    );
}