import React from 'react'
import styles from './PageCapacitySelect.module.css'

function PageCapacitySelect({
  todos,
  setPageCapacity,
  currentPageNumber,
  setCurrentPageNumber,
}) {
  const capacityChangeHandler = (e) => {
    setPageCapacity(e.target.value)

    const newLastPage = [
      ...Array(Math.ceil(todos.length / e.target.value + 1)).keys(),
    ]
      .slice(1)
      .at(-1)

    if (currentPageNumber > newLastPage) setCurrentPageNumber(newLastPage)
  }

  return (
    <select
      onChange={capacityChangeHandler}
      className={styles['page-capacity-options']}
    >
      <option>10</option>
      <option>20</option>
      <option>50</option>
      <option>100</option>
    </select>
  )
}

export default PageCapacitySelect
