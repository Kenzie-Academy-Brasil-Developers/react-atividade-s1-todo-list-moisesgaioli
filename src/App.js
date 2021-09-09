import './App.css';
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { useState } from 'react';


function App() {

  const [list, setList] = useState([]);

  function addTodo (newTodo) {

    setList([...list, newTodo]);
    
  }
  
  function handleTodo (removeItem) {
    setList(list.filter(item => item !== removeItem));
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <Form addTodo={addTodo} />

        <TodoList list={list} handleTodo={handleTodo} />

      </header>
    </div>
  );
}

export default App;
