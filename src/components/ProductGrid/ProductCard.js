import React from 'react';

const ProductCard = (props) => (
  <div className="product-card">
    <div className="product-image">
      <img src={require(`../../assets/${props.product.productImage}`)} alt="" />
    </div>
    <div className="product-info">
      <h5 className="product-info__item">{props.product.productName}</h5>
      <h6 className="product-info__price">{props.product.price}</h6>
    </div>
  </div>
)

export default ProductCard;