import React from 'react';
import './ProductCards.css';

const ProductCards = (props) => {
  const cards = props.products.map((product) => (
    <div className="product-card">
      <div className="product-image">
        <img src={require(`../../assets/${product.productImage}`)} alt=""/>
      </div>
      <div className="product-info">
        <h5 className="product-info__item">{product.productName}</h5>
        <h6 className="product-info__price">{product.price}</h6>
      </div>
    </div>
  ));

  return(
    <section class="product-container">
      {cards}
    </section>  
  )
}

export default ProductCards;
