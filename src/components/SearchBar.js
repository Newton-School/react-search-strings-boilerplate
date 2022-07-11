import React from 'react'

const SearchBar = (props) => {
  return (
    <div className='search-bar-container'>
        <label htmlFor='search-bar'>Type String you need to search: </label>
        <input type='text' id='search-bar' ref={props.inputRef}></input>
        <button className='btn btn-primary' id='search-button' onClick={props.change}>Search</button>
    </div>
  )
}

export default SearchBar;