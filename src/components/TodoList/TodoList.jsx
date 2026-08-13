import styles from "./TodoList.module.css";
import { TodoListItem } from "../TodoListItem/TodoListItem";
export function TodoList({ todos, onUpdate, onDelete }) {
  return (
    <section>
      <h3>To-do List</h3>
      {todos.length == 0 && <p>Sorry, you don't have any todos</p>}
      <ul className={styles.TodoList}>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
}
