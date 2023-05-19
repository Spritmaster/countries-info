import React, { useState } from 'react'
import iconser from '../icon/search.svg'
import axios from 'axios'

const Search = ({setCountries , getData}) => {

    const[name ,setName] =useState("")

    const searchCountry = async name =>{
        try {
           const res = await axios ({
            url:`https://restcountries.com/v3.1/name/${name}`
           });
           if (res.status ===200) {
            setCountries(res.data)
           } 
        } catch (error) {
        }
    }
    const handleEnter = e =>{
        if( name ==="" && e.key==="Enter" ){
            getData()
        }
        else if(e.key==="Enter" ){
            searchCountry(name)
        }
    }
  return (
    <div className=' bg-white max-w-md rounded-[5px] flex items-center gap-6  py-[18px] px-8'>
        <img src={iconser} alt="" />
        <input
        value={name}
        onKeyUp={handleEnter}
        onChange={(e)=>setName(e.target.value)}
        className='outline-none placeholder-[#848484] text-sm' type="text "  placeholder='Search for a country…'/>
    </div>
  )
}

export default Search