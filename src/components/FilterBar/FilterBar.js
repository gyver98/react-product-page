import React from 'react';
import './FilterBar.css';

const FilterBar = (props) => {
  const sizes = props.products.reduce((prev, curr) => {
    return [...prev, ...curr.size];
  }, ['Filter by size']);
  const uniqueSizes = [...new Set(sizes)];

  const sizeOptions = uniqueSizes.map(size => (
    <option value={size}>{size}</option>
  ))

  return (
    <nav className="filter-container">
      <div className="filter">
        <h1>Women's tops</h1>
        <select className="filter__field" name="" id="">
          {sizeOptions}
        </select>
      </div>
    </nav>
  )
}

export default FilterBar;


