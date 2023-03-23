import React from 'react';
import "../Product/product.css"
export default function ProductCard({ product, onAdd }) {
  console.log(product)
  return (
    <div className="card">
      <div className='carImgBox'>
      <img src={product.images[0]} alt={product.title} />
      </div>
    <div className="card-body">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
    <div className='addBtn'>
      <span onClick={() => onAdd(product)}>Addn Item</span>
    </div>
  </div>
  );
}
