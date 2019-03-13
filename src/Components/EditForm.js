import React, { Component } from "react";

class EditForm extends Component {
  state = {
    name: this.props.editingUser.name,
    username: this.props.editingUser.username,
    email: this.props.editingUser.email
  };

  changeHandler = e => {
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    // console.log(this.props);
    return (
      <form
        className="forms"
        onSubmit={e => this.props.submitHandler(e, this.props.editingUser)}
      >
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
        <button>Edit User</button>
      </form>
    );
  }
}
export default EditForm;
