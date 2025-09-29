import React from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

 const pages = [...Array(totalPages).keys()];

  return (
    <div className="pagination">
      {pages.map((index) => (
        <button
          key={index}
          className={index === currentPage ? "active" : ""}
          onClick={() => onPageChange(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};


export default Pagination;
