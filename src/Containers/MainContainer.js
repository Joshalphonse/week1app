import React, { Component } from "react";
import UserContainer from "./UserContainer";
import Search from "../Components/Search";
import NewUserForm from "../Components/NewUserForm";
import EditForm from "../Components/EditForm";
import { Heading } from "reakit";
const URL = "https://jsonplaceholder.typicode.com/users";

class MainContainer extends Component {
  state = {
    users: [],
    filteredUsers: [],
    searchTerm: "",
    edit: false,
    editingUser: {}
  };

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(users =>
        this.setState({
          users: users,
          filteredUsers: users
        })
      );
  }

  changeHandler = e => {
    console.log(e.target.value);
    let term = e.target.value.toLowerCase();
    let newArray = [...this.state.users].filter(users =>
      users.name.toLowerCase().includes(term)
    );

    this.setState({
      searchTerm: term,
      filteredUsers: newArray
    });
  };

  submitHandler = userObj => {
    const searchTerm = this.state.searchTerm;
    this.setState({
      users: [userObj, ...this.state.users],
      filteredUsers: [userObj, ...this.state.users].filter(user =>
        user.name.toLowerCase().includes(searchTerm)
      )
    });
  };

  deleteClickHandler = userObj => {
    console.log("deleted");
    let newArray = [...this.state.users].filter(
      user => user.name !== userObj.name
    );

    this.setState({
      users: newArray,
      filteredUsers: newArray
    });
  };

  editHandler = user => {
    this.setState({
      edit: !this.state.edit,
      editingUser: user
    });
  };

  editChangeSubmitHandler = (e, userObj) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(userObj);
    let editingPerson = [...this.state.users].find(
      user => user.id === userObj.id
    );
    editingPerson.username = e.target.username.value;
    editingPerson.email = e.target.email.value;
    console.log(e.target.email.value);
    editingPerson.name = e.target.name.value;
    let newArray = [...this.state.filteredUsers].filter(
      user => user.id !== editingPerson.id
    );

    this.setState({
      users: [editingPerson, newArray]
    });
  };

  render() {
    // console.log(this.state);
    // console.log(this.state.editingUser);
    return (
      <div>
        <React.Fragment>
          <Heading use="h2">USER LIST</Heading>
        </React.Fragment>
        <Search
          input={this.state.searchTerm}
          changeHandler={this.changeHandler}
        />

        <br />
        <NewUserForm submitHandler={this.submitHandler} />
        {this.state.edit ? (
          <EditForm
            editingUser={this.state.editingUser}
            clickHandler={this.editHandler}
            submitHandler={this.editChangeSubmitHandler}
          />
        ) : null}
        <UserContainer
          clickHandler={this.editHandler}
          deleteClickHandler={this.deleteClickHandler}
          users={this.state.filteredUsers}
        />
      </div>
    );
  }
}

export default MainContainer;
