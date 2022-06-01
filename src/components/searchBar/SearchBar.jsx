import './searchBar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ setSearch }) => {
  return (
    <div className="searchBarContainer">
      <FontAwesomeIcon icon={faMagnifyingGlass}/>
      <input 
        type="text" 
        className="searchInput" 
        placeholder='Search for a country...'
        onChange={(e) => setSearch(e.target.value)}
        autoComplete="off"/>
    </div>
  )
}

export default SearchBar