import React, { Component } from "react";
import { Label, Input, Field } from "reakit";

class NewUserForm extends Component {
  state = {
    name: "",
    username: "",
    email: ""
  };

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();

    this.props.submitHandler(this.state);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        Name:
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        UserName:
        <input
          type="text"
          placeholder="UserName"
          name="username"
          value={this.state.username}
          onChange={this.changeHandler}
        />
        Email:
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.changeHandler}
        />
        <button>Add User</button>
      </form>
    );
  }
}
export default NewUserForm;
