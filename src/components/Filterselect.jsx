import axios from 'axios'
import React from 'react'
import Select from 'react-select'

const Filterselect = ({setCountries ,getData}) => {

  const filterCountries =async (region)=> {
    try {
      const res  =await axios ({
        url:`https://restcountries.com/v3.1/region/${region}`
      });
      if(res.status===200){
        setCountries(res.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const options =[
          { value: 'all',   label: 'All' },
          { value: 'africa',   label: 'Africa' },
          { value: 'america ', label: 'America' },
          { value: 'asia ',    label: 'Asia' },
          { value: 'europe ',  label: 'Europe' },
          { value: 'oceania ', label: 'Oceania' }
  ]

  const handSelect =(e)=>{
if(e.value!=="all"){
  filterCountries(e.value)
}
else{
  getData()
}
  }

  return (
    <div className='w-56'> 
      <Select 
      placeholder="Filter by Region" 
      options={options}
      onChange={handSelect}
      isClearable={false}
      ></Select>
    </div>
  )
}

export default Filterselect