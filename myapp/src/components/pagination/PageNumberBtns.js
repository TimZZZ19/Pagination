import React from 'react'
import styles from './PageNumberBtns.module.css'

function PageNumberBtns({
  pageNumbers,
  currentPageNumber,
  setCurrentPageNumber,
}) {
  const pageNumberChangeHandler = (e) =>
    setCurrentPageNumber(+e.target.innerText)

  return (
    <>
      {pageNumbers.map((number) => (
        <span
          className={`${styles['page-number-btn']} ${
            number === currentPageNumber && styles['page-number-btn--active']
          }`}
          key={number}
          onClick={pageNumberChangeHandler}
        >
          {number}
        </span>
      ))}
    </>
  )
}

export default PageNumberBtns
