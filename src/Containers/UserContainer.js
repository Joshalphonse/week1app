import React, { Component } from "react";
import User from "../Components/User";

class UserContainer extends Component {
  render() {
    let userList = this.props.users.map(user => {
      return (
        <User
          clickHandler={this.props.clickHandler}
          deleteClickHandler={this.props.deleteClickHandler}
          userClickHandle={this.props.userClickHandle}
          user={user}
          key={user.id}
        />
      );
    });

    return <h1>{userList} </h1>;
  }
}

export default UserContainer;
