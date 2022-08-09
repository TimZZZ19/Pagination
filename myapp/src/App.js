import axios from 'axios'
import styles from './App.module.css'
import { useState, useEffect } from 'react'
import Pagination from './components/pagination/Pagination'
import List from './components/list/List'

function App() {
  const [todos, setTodos] = useState([])
  const [pageCapacity, setPageCapacity] = useState(10)
  const [currentPageNumber, setCurrentPageNumber] = useState(1)

  const url = `https://jsonplaceholder.typicode.com/todos`

  useEffect(() => {
    axios.get(url).then((res) => {
      setTodos(res.data)
    })
  }, [url])

  return (
    <div className={styles.App}>
      <Pagination
        todos={todos}
        currentPageNumber={currentPageNumber}
        pageCapacity={pageCapacity}
        setPageCapacity={setPageCapacity}
        setCurrentPageNumber={setCurrentPageNumber}
      />
      <List
        pageCapacity={pageCapacity}
        currentPageNumber={currentPageNumber}
        todos={todos}
      />
    </div>
  )
}

export default App
