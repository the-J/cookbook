import React, {useState} from 'react';
import './App.css';
import { API, graphqlOperation } from "aws-amplify"
import { createTodo } from "./graphql/mutations"


function App() {

    const [todoName, setTodoName] = useState('')
  const handleChange = (evt) => {
    setTodoName(evt.target.value)
  }

  const addTodo = async () => {
    await API.graphql(
        graphqlOperation(createTodo, { input: { name: todoName } })
    )
    setTodoName('') // make the input blank again
  }


  return (
      <div className="App">
        <input type="text" value={todoName} onChange={handleChange} />
        <button onClick={addTodo}>Add ToDo</button>
      </div>
  );
}

export default App;
