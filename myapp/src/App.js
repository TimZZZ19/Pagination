import axios from "axios";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [pageCapacity, setPageCapacity] = useState(10);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const url = `https://jsonplaceholder.typicode.com/todos`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setTodos(res.data);
    });
  }, [url]);

  const pageNumbers = [
    ...Array(Math.ceil(todos.length / pageCapacity + 1)).keys(),
  ].slice(1);

  const pageNumberBtns = pageNumbers.map((number) => (
    <span
      className={`${styles["page-number-btn"]} ${
        number === currentPageNumber && styles["page-number-btn--active"]
      }`}
      key={number}
    >
      {number}
    </span>
  ));

  const list = todos.map((todo) => (
    <div className={styles.item} key={todo.id}>
      <span>{todo.id}.&nbsp;</span>
      <span>{todo.title}</span>
    </div>
  ));

  const changeHandler = (e) => {
    setPageCapacity(e.target.value);
  };

  return (
    <div className={styles.App}>
      <div className={styles.pagination}>
        <button className={`${styles["pagination-btn"]} ${styles["prev-btn"]}`}>
          prev
        </button>
        {pageNumberBtns}
        <button className={`${styles["pagination-btn"]} ${styles["next-btn"]}`}>
          next
        </button>
        <select
          onChange={changeHandler}
          className={styles["page-capacity-options"]}
        >
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
      <div className={styles.list}>{list}</div>
    </div>
  );
}

export default App;
