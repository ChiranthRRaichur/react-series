import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //  console.log(props);

    this.state = {
      count: 0,
      count1: 1,
    };
  }
  
  componentDidMount() {
    console.log("Component Mounted"); // -> Called in commit phase and after rendering
  }

  componentDidUpdate() {
    console.log("Component Updated"); // -> Called in commit phase, when this.setState updates State value
  }

  componentWillUnmount() {
    console.log("Component Unmounted"); // -> 	called in commit phase, when we move from component mounted page to other page
  }

  render() {
    const { namee } = this.props;

    return (
      <div className="user">
        <br />
        <br />

        <h2>count: {this.state.count}</h2>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>

        <h2>User Class Profile</h2>
        <h3>Name: {namee}</h3>
        <p>Email: {this.props.mail}</p>
        <p>Phone: 9876543210</p>
      </div>
    );
  }
}

export default UserClass;
