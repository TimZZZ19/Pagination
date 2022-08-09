import React from 'react'
import styles from './List.module.css'

function List({ pageCapacity, currentPageNumber, todos }) {
  const endIdx = pageCapacity * currentPageNumber
  const startIdx = endIdx - pageCapacity
  const currentList = todos.slice(startIdx, endIdx)

  return (
    <div className={styles.list}>
      {currentList.map((todo) => (
        <div className={styles.item} key={todo.id}>
          <span>{todo.id}.&nbsp;</span>
          <span>{todo.title}</span>
        </div>
      ))}
    </div>
  )
}

export default List
