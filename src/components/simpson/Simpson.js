import './Simpson.css';

export default function Simpson(props) {
    const {name, surname, age, info, photo} = props.item;
    return (
        <div className={'item'}>
            <h2>{name} {surname} - {age}</h2>
            <p>{info}</p>
            <img src={photo} alt="qq"/>
        </div>
    );
}