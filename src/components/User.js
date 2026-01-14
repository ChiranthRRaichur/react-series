const User = (props) => {
    return (
        <div className="user">
            <br/>
            <h2>User Profile</h2>
            <h3>Name: {props.name}</h3>
            <p>Email: crr@gmail.com</p>
            <p>Phone: 9876543210</p>
        </div>
    );
}

export default User;