import styles from "./todoitem.module.css";
export default function TodoItems({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button clicked for item ", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleText(name) {
    console.log("Item clicked", name);
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  let className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleText(item.name)}>{item.name}</span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
