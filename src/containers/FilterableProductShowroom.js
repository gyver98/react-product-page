import React, { Component } from 'react';
import FilterBar from './../components/FilterBar/FilterBar';
import ProductCards from './../components/ProductCards/ProductCards';

class FilterableProductShowroom extends Component {
  render(props) {
    return ([
      <FilterBar />,
      <ProductCards products={this.props.products}/>
      ]
    )
  }
}

export default FilterableProductShowroom;