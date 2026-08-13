import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/priorities";
import { useState } from "react";
import styles from "./TodoListItem.module.css";
import { TodoFormFields } from "../TodoFormFields/TodoFormFields";

export function TodoListItem({ todo, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleCompleted(e) {
    onUpdate(todo.id, { ...todo, completed: e.target.checked });
  }

  function handleEdit(e) {
    e.preventDefault();

    const { elements } = e.target;

    if (elements.name.value === "") return;

    onUpdate(todo.id, {
      name: elements.name.value,
      description: elements.description.value,
      deadline: elements.deadline.value,
      priority: elements.priority.value,
      completed: todo.completed,
    });

    setIsEditing(false);
  }

  const viewingTemp = (
    <div className={styles.Content}>
      <input
        type="checkbox"
        name="completed"
        checked={todo.completed}
        className={styles.Status}
        onChange={handleCompleted}
      />
      <div className={styles.Info}>
        {todo.name}

        {todo.description && (
          <span className={styles.Description}>{todo.description} </span>
        )}
        <div className={styles.AdditionalInfo}>
          {todo.deadline}{" "}
          {todo.priority !== PRIORITY_DEFAULT && (
            <span style={{ color: PRIORITIES[todo.priority].color }}>
              {PRIORITIES[todo.priority].label}
            </span>
          )}
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={() => setIsEditing(!isEditing)}>📝</button>
        <button onClick={() => onDelete(todo.id)}>🗑️</button>
      </div>
    </div>
  );

  const editingTemp = (
    <form
      className={styles.Content}
      onReset={() => setIsEditing(false)}
      onSubmit={handleEdit}
    >
      <TodoFormFields todo={todo} />

      <div className={styles.controls}>
        <input type="submit" value="💾" />
        <input type="submit" value="❌" />
      </div>
    </form>
  );
  return (
    <li className={styles.TodoListItem} data-completed={todo.completed}>
      {isEditing ? editingTemp : viewingTemp}
    </li>
  );
}
