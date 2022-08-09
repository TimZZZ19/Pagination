import React from 'react'
import styles from './Next.module.css'
import PaginationBtn from './PaginationBtn'

function Next({ currentPageNumber, setCurrentPageNumber, pageNumbers }) {
  const paginationBtnClickHandler = () => {
    if (currentPageNumber < pageNumbers.at(-1)) {
      setCurrentPageNumber((currPageNum) => currPageNum + 1)
    }
  }
  return (
    <PaginationBtn
      secondaryClass={`${styles['next-btn']}`}
      clickHandler={paginationBtnClickHandler}
    >
      next
    </PaginationBtn>
  )
}

export default Next
