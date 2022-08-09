import React, { useState, useEffect } from 'react'
import styles from './Pagination.module.css'

const Pagination = ({
  todos,
  currentPageNumber,
  pageCapacity,
  setPageCapacity,
  setCurrentPageNumber,
}) => {
  const pageNumbers = [
    ...Array(Math.ceil(todos.length / pageCapacity + 1)).keys(),
  ].slice(1)

  const pageNumberChangeHandler = (e) =>
    setCurrentPageNumber(+e.target.innerText)

  const pageNumberBtns = pageNumbers.map((number) => (
    <span
      className={`${styles['page-number-btn']} ${
        number === currentPageNumber && styles['page-number-btn--active']
      }`}
      key={number}
      onClick={pageNumberChangeHandler}
    >
      {number}
    </span>
  ))

  const paginationBtnClickHandler = (e) => {
    const text = e.target.innerText

    if (text === 'prev' && currentPageNumber > 1) {
      setCurrentPageNumber((currPageNum) => currPageNum - 1)
    }

    if (text === 'next' && currentPageNumber < pageNumbers.at(-1)) {
      setCurrentPageNumber((currPageNum) => currPageNum + 1)
    }
  }

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
    <div className={styles.pagination}>
      <button
        onClick={paginationBtnClickHandler}
        className={`${styles['pagination-btn']} ${styles['prev-btn']}`}
      >
        prev
      </button>
      {pageNumberBtns}
      <button
        onClick={paginationBtnClickHandler}
        className={`${styles['pagination-btn']} ${styles['next-btn']}`}
      >
        next
      </button>
      <select
        onChange={capacityChangeHandler}
        className={styles['page-capacity-options']}
      >
        <option>10</option>
        <option>20</option>
        <option>50</option>
        <option>100</option>
      </select>
    </div>
  )
}

export default Pagination
