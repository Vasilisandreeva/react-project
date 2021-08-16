export default function Company({company: {name, catchPhrase, bs}}) {
  return (
    <div>
      <ul>
          <li>Name - {name}</li>
          <li>CatchPrase - {catchPhrase}</li>
          <li>Bs - {bs}</li>
      </ul>
    </div>
  );
}