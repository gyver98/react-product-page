import React from 'react';
import './FilterBar.css';

const FilterBar = () => (
  <nav className="filter-container">
    <div className="filter">
      <h1>Women's tops</h1>
      <select className="filter__field" name="" id="">
        <option value="/">Filter by size</option>
      </select>
    </div>
  </nav>
)

export default FilterBar;


