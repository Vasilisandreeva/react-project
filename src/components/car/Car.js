export default function Car({item, btnOnClickDelete}) {
  return (
    <div>
        {item.id} - {item.model} - {item.price} - {item.year}
      <button>Edit</button>
      <button onClick={() => btnOnClickDelete(item.id)}>Delete</button>
    </div>
  );
}