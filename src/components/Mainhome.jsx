import React from 'react'
import Country from './Country'

const Mainhome = ({countries}) => {
  return (
    <div className=' main container mx-auto mt-12'>
        {countries.map(( country ) => 
       ( <Country key={country.name.common} {...country} ></Country>)) }
    </div>
  )
}

export default Mainhome