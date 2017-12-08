import React, { Component } from 'react';
import './ProductCards.css';
import ProductCard from './ProductCard';

class ProductCards extends Component {

  render() {
    const filterSize = this.props.filterSize;
    const cards = [];

    this.props.products.map((product) => {
      if (product.size.indexOf(filterSize) !== -1) {
        cards.push(
          <ProductCard product={product} />
        )
      } else if (filterSize === '' || filterSize === 'Filter by size') {
        cards.push(
          <ProductCard product={product} />
        )  
      }
    });
  
    return(
      <section class="product-container">
        {cards}
      </section>  
    )
  }
  
}

export default ProductCards;
