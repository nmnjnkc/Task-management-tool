import React from 'react'
import "./Search.scss"

const Search = ({onChange}) => {

  const handleChange = (event) => {
    onChange(event.target.value);
  }
  return (

    <div className='search'>
      <input type="text" placeholder="Search" onChange={handleChange} />
    </div>

  )
}

export default Search