import React, { useState, useEffect } from "react";
import styles from "./PageNumberBtns.module.css";

const basePoint = 6;
const defaultRange = { start: 0, end: 10 };

function PageNumberBtns({
  pageNumbers,
  currentPageNumber,
  setCurrentPageNumber,
}) {
  const [range, setRange] = useState(defaultRange);

  useEffect(() => {
    if (pageNumbers.at(-1) - basePoint <= 4) {
      setRange(defaultRange);
      return;
    }

    const relativeDifferenceFromBase = currentPageNumber - basePoint;
    let startIdx = 0;

    if (relativeDifferenceFromBase > 0) startIdx = relativeDifferenceFromBase;

    if (relativeDifferenceFromBase + 10 > 20)
      startIdx = pageNumbers.length - 10;

    setRange({
      start: startIdx,
      end: startIdx + 10,
    });
  }, [currentPageNumber, pageNumbers]);

  const pageNumberChangeHandler = (e) =>
    setCurrentPageNumber(+e.target.innerText);

  const currentRange = pageNumbers.slice(range.start, range.end);

  return (
    <>
      {currentRange.map((number) => (
        <span
          className={`${styles["page-number-btn"]} ${
            number === currentPageNumber && styles["page-number-btn--active"]
          }`}
          key={number}
          onClick={pageNumberChangeHandler}
        >
          {number}
        </span>
      ))}
    </>
  );
}

export default PageNumberBtns;
