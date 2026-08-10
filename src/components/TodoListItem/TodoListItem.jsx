import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/priorities";
import { useState } from "react";
import styles from "./TodoListItem.module.css";

export function TodoListItem({ todo, onUpdate }) {
  function handleCompleted(e) {
    onUpdate(todo.id, { ...todo, completed: e.target.checked });
  }

  return (
    <li className={styles.TodoListItem} data-completed={todo.completed}>
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
      </div>
    </li>
  );
}
