import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Mainhome from './components/Mainhome'
import axios from 'axios'


const App = () => {

  const [countries,setCountries] =useState([])
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    getData()
  },[])

  const getData =async ()=>{
    setLoading(true)
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
    setLoading(false)
  }

  return (
    <div className='bg-[#fafafa] text-[var(--text-color)] dark:text-[#fff]  dark:bg-[#202c36]'>
      <Header></Header>
      <SearchBar getData={getData} setCountries={setCountries} ></SearchBar>
      <Mainhome loading={loading} countries={countries}></Mainhome>
    </div>
  )
}

export default App