export default function User({userItem, btnClick}) {

    let {id, name, username, email, phone, website} = userItem;

    const onClickBtnClick = () => {
        btnClick(userItem);
    }

    return (
        <div>
            <h3>{id} - {name}</h3>
            <ul>
                <li>Username - {username}</li>
                <li>Email - {email}</li>
                <li>Phone - {phone}</li>
                <li>Website - {website}</li>

                <button onClick={onClickBtnClick}>Posts of user</button>

            </ul>
        </div>
    );
}