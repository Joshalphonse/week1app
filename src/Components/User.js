import React from "react";
import { Provider, Button } from "reakit";
import theme from "reakit-theme-default";
import { List } from "reakit";
const User = props => {
  let { user, deleteClickHandler, userClickHandle } = props;

  let editHandler = e => {
    props.clickHandler(e);
  };

  return (
    <div>
      <List>
        <li onClick={() => editHandler(user)}>
          {user.name} | {user.username} | {user.email}
        </li>
      </List>

      <Provider theme={theme}>
        <Button onClick={() => deleteClickHandler(user)}>delete</Button>
      </Provider>
      <Provider theme={theme}>
        <Button onClick={console.log("clicked")}>delete</Button>
      </Provider>
    </div>
  );
};
export default User;
