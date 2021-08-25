export default function Car({item, onClickDeleteBtn, setFormData}) {
  return (
    <div>
        {item.id} - {item.model} - {item.price} - {item.year}
      <button onClick={() => setFormData(item)}>Edit</button>
      <button onClick={() => onClickDeleteBtn(item.id)}>Delete</button>
    </div>
  );
}