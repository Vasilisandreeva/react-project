import Comments from "../comments/Comments";

export default function Comment({item, setChosenComments}) {
  return (
    <div>
        <h3>{item.id} - {item.name}</h3>
        <button onClick={() => setChosenComments(item)}>show post comments</button>
    </div>
  );
}