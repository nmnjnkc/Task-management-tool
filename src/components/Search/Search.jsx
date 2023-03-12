import React from 'react'
import Input from '../Input/Input'
import "./Search.scss"

const Search = ({method}) => {

  // const handleChange = (event) => {
  //   onChange(event.target.value);
  // }

  
  return (

    <div className='search'>
      <Input placeholder="Search" method={method}/>
      {/* <input type="text" placeholder="Search" onChange={handleChange} /> */}
    </div>

  )
}

export default Search