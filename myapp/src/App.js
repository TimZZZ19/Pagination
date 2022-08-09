import axios from "axios";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

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

  const endIdx = pageCapacity * currentPageNumber;
  const startIdx = endIdx - pageCapacity;

  const currentList = todos.slice(startIdx, endIdx);

  const list = currentList.map((todo) => (
    <div className={styles.item} key={todo.id}>
      <span>{todo.id}.&nbsp;</span>
      <span>{todo.title}</span>
    </div>
  ));

  return (
    <div className={styles.App}>
      <Pagination
        todos={todos}
        currentPageNumber={currentPageNumber}
        pageCapacity={pageCapacity}
        setPageCapacity={setPageCapacity}
        setCurrentPageNumber={setCurrentPageNumber}
      />
      <div className={styles.list}>{list}</div>
    </div>
  );
}

export default App;
