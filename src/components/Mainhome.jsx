import React from 'react'
import Country from './Country'
import CountrySkeleton from './CountrySkeleton'


const Mainhome = ({countries ,loading}) => {
  return (
    <div className=' main container px-4 mx-auto mt-12'>
        {!loading && countries.map(( country ) => 
       ( <Country key={country.name.common} {...country} ></Country>)) }
       {loading && [1,2,3,4].map(key => <CountrySkeleton  key={key}/>)}
    </div>
  )
}

export default Mainhome