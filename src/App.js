import React, { useState } from "react";
import "./App.styles.sass";
import { API, graphqlOperation } from "aws-amplify";
import { createBlog } from "./graphql/mutations";
import { HomeLayout } from "./layouts";
import { nanoid } from "nanoid";

function App() {
  const [todoName, setTodoName] = useState("");
  const handleChange = (evt) => {
    setTodoName(evt.target.value);
  };

  const addTodo = async () => {
    const newBlog = {
      id: nanoid(),
      name: todoName,
      posts: [
        {
          id: nanoid(),
          title: todoName + " post name",
        },
      ],
    };

    await API.graphql(graphqlOperation(createBlog, { input: { ...newBlog } }));

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
