export default function Form() {
  return (
    <div>
        <form>
            <h3>Form for adding a car</h3>
            <input type="text" name={model}/>
            <input type="number" name={price}/>
            <input type="number" name={year}/>
            <button>Save</button>
        </form>
    </div>
  );
}