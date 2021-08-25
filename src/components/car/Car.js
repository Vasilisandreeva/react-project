export default function Car({item}) {
  return (
    <div>
        {item.id} - {item.model} - {item.price} - {item.year}
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}