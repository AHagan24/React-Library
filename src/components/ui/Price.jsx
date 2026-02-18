import React from 'react'

export default function Price({ book }) {
  return (
    <div className="book__price">
      {book.salePrice ? (
        <>
          <span className="book__price--normal">
            ${book.originalPrice.toFixed(2)}
          </span>
          ${book.salePrice.toFixed(2)}
        </>
      ) : (
        <> ${book.originalPrice.toFixed(2)} </>
      )}
    </div>
  )
}
