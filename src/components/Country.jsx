import numeral from 'numeral'
import React from 'react'

const Country = ({name, flags , population ,region,capital}) => {
    const formatedPopulation =numeral(population).format("0,0")
  return (
    <div className='max-w-xs bg-white dark:bg-[#2b3844] overflow-hidden shadow-[0px_0px_7px_2px_#00000008] rounded-[5px]'>
        <img 
        src={flags.png}
        alt={flags.alt} />

        <div className='p-6'>
            <h2 className='font-extrabold mb-4 text-lg'>{name.common}</h2>
            <div>
                <span className='text-sm font-extrabold mb-2'>Population: </span> 
                {formatedPopulation}
            </div>
            <div>
                <span className='text-sm font-extrabold mb-2'>Ragion: </span> 
                {region}
            </div>
            <div>
                <span className='text-sm font-extrabold mb-2'>Capital: </span> 
                {capital && capital[0]}
            </div>
        </div>
    </div>
  )
}

export default Country