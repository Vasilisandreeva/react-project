import Comments from "../comments/Comments";

export default function Post({item, setChosenPost, setChosenComments}){
 return (
    <div>
        title: {item.title}
        <button onClick={() => setChosenPost(item)}>show post info</button>
    </div>
  );
}