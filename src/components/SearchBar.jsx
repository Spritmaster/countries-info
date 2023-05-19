import React from 'react'
import Search from './Search'
import Filterselect from './Filterselect'



const SearchBar = ({setCountries ,getData}) => {


  return (
    <div className='mt-12 container mx-auto flex justify-between'>
        <Search getData={getData} setCountries={setCountries}></Search>
        <Filterselect setCountries={setCountries}></Filterselect>
    </div>
  )
}

export default SearchBar