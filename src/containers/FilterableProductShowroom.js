import React, { Component } from 'react';
import FilterBar from './../components/FilterBar/FilterBar';
import ProductCards from './../components/ProductCards/ProductCards';

class FilterableProductShowroom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterSize: ''
    };

    this.handleFilterOptionChange = this.handleFilterOptionChange.bind(this);
    
  }

  handleFilterOptionChange(filterSize) {
    this.setState({
      filterSize: filterSize
    });
  }

  render(props) {
    return ([
      <FilterBar 
        filterSize={this.state.filterSize}
        onFilterOptionChange={this.handleFilterOptionChange}
        products={this.props.products} 
      />,
      <ProductCards 
        filterSize={this.state.filterSize}
        products={this.props.products} 
      />
      ]
    )
  }
}

export default FilterableProductShowroom;