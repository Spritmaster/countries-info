import axios from 'axios'
import React from 'react'
import Select from 'react-select'

const Filterselect = ({setCountries}) => {

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
          { value: 'africa',   label: 'Africa' },
          { value: 'america ', label: 'America' },
          { value: 'asia ',    label: 'Asia' },
          { value: 'erope ',  label: 'Europe' },
          { value: 'oceania ', label: 'Oceania' }
  ]

  const handSelect =(e)=>{
filterCountries(e.value)
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