export default function Car({item, btnOnClickDelete, setFormData}) {
  return (
    <div>
        {item.id} - {item.model} - {item.price} - {item.year}
      <button onClick={() => setFormData}>Edit</button>
      <button onClick={() => btnOnClickDelete(item.id)}>Delete</button>
    </div>
  );
}