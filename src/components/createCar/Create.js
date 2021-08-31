export default function Create() {
    let createCar = (f) => {
        f.preventDefault();

    }
  return (
    <div>
      <form onSubmit={createCar}>
        <input type="text" name={'model'} placeholder={'model'} minLength={1} maxLength={20}/>
        <input type="number" name={'price'} placeholder={'price'} min={0}/>
          <input type="number" name={'year'} placeholder={'year'} min={1990} max={2021}/>
          <button>Save</button>
      </form>
    </div>
  );
}