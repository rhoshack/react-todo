import styles from "./App.module.css";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function handleCreate(newTodo) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: `${prevTodos.length + 1}`, ...newTodo },
    ]);
  }
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src="/to-do.png" className={styles.Logo} />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        <TodoForm onCreate={handleCreate} />
        {JSON.stringify(todos)}
      </div>
    </div>
  );
}

export default App;
