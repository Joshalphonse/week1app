import React from "react";
import { Input } from "reakit";

const Search = props => {
  let { input, changeHandler } = props;

  return (
    <div>
      <form>
        <Input
          type="text"
          placeholder="Search"
          value={input}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default Search;
