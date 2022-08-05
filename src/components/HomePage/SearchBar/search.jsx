import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './style.css';

const SearchBar = ({ value, changeInput}) => {
  return (
    <div className='searchBar-wrap' id="wrap">
      <SearchIcon className="searchBar-icon"/>

      <input
      type='text'
      placeholder='Type any Recipe...'
      value={value}
      onChange={changeInput}
      />
    </div>
  )
}

export default SearchBar