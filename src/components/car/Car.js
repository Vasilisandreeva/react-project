export default function Car({model, price, year}) {
  return (
    <div>
        {model - price - year}
    </div>
  );
}