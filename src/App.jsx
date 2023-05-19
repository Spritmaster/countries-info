import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Mainhome from './components/Mainhome'
import axios from 'axios'


const App = () => {

  const [countries,setCountries] =useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData =async ()=>{
    try{
      const res = await axios({
        url:"https://restcountries.com/v3.1/all"
      });
if(res.status===200){
  setCountries(res.data)
}
    } catch(error){
     alert(error)
    }
  }

  return (
    <div>
      <Header></Header>
      <SearchBar getData={getData} setCountries={setCountries} ></SearchBar>
      <Mainhome countries={countries}></Mainhome>
    </div>
  )
}

export default App