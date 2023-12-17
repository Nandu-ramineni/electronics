// Pagination.jsx
import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <>
          <button onClick={() => onPageChange(1)}>
            <FaAngleLeft />
            <FaAngleLeft />
          </button>
          <button onClick={() => onPageChange(currentPage - 1)}>
            <FaAngleLeft />
          </button>
        </>
      )}

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber === currentPage ? 'active' : ''}
        >
          {pageNumber}
        </button>
      ))}

      {currentPage < totalPages && (
        <>
          <button onClick={() => onPageChange(currentPage + 1)}>
            <FaAngleRight />
          </button>
          <button onClick={() => onPageChange(totalPages)}>
            <FaAngleRight />
            <FaAngleRight />
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
