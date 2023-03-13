import React from 'react'
import Input from '../Input/Input'
import { HiSearch } from 'react-icons/hi'
import "./Search.scss"

const Search = ({method, serach}) => {

  return (

    <div className='search'>
      <HiSearch className='search-icon' />
      <Input placeholder={`Search ${serach}`} method={method}/>
    </div>

  )
}

export default Search