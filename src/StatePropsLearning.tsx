import React from "react";
import PropsLearning from "./PropsLearning";

class StatePropsLearning extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "Rajesh",
      lastName: "Patil"
    };
  }

  render() {
    return (
      <div>
        <PropsLearning
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
        <button type="button" onClick={this.ChangeUserDetails}>
          Change UserDetails
        </button>
      </div>
    );
  }

  ChangeUserDetails = () => {
    console.log("ChangeUserDetails function call.");

    this.setState({
      firstName: "Paresh",
      lastName: "Kadam"
    });
  };
}

export default StatePropsLearning;
