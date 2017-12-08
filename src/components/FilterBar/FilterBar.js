import React, {Component} from 'react';
import './FilterBar.css';



class FilterBar extends Component { 
  constructor(props) {
    super(props);
    this.handleFilterOptionChange = this.handleFilterOptionChange.bind(this);
  }

  handleFilterOptionChange(e) {
    this.props.onFilterOptionChange(e.target.value);
  }

  render() {
    const sizes = this.props.products.reduce((prev, curr) => {
      return [...prev, ...curr.size];
    }, ['Filter by size']);
    const uniqueSizes = [...new Set(sizes)];
    
    const sizeOptions = uniqueSizes.map(size => (
      <option value={size}>{size}</option>
    ));

    return (
      <nav className="filter-container">
        <div className="filter">
          <h1>Women's tops</h1>
          <form>
            <select 
              className="filter__field"
              onChange={this.handleFilterOptionChange}
            >
              {sizeOptions}
            </select>
          </form>
        </div>
      </nav>  
    )
  }

} 

export default FilterBar;


