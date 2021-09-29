import React, { useState } from "react";
import "./App.sass";
import { API, graphqlOperation } from "aws-amplify";
import { createTodo } from "./graphql/mutations";
import { HomeLayout } from "./layouts";

function App() {
  const [todoName, setTodoName] = useState("");
  const handleChange = (evt) => {
    setTodoName(evt.target.value);
  };

  const addTodo = async () => {
    await API.graphql(
      graphqlOperation(createTodo, { input: { name: todoName } })
    );

    setTodoName(""); // make the input blank again
  };

  return (
    <div className="container">
      <HomeLayout>
        <div className="block">
          <input
            name="todo"
            className="input is-primary is-large"
            type="text"
            value={todoName}
            onChange={handleChange}
            placeholder="Add TODO"
          />
        </div>
        <button className="button mt-1" onClick={addTodo}>
          Add ToDo
        </button>
      </HomeLayout>
    </div>
  );
}

export default App;
