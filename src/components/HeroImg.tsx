import React from 'react'

export default function HeroImg() {
  return (
    <div className='h-[20vh] text-shadow-md'>
      <img
        src={'/cupcakes.jpg'} 
        alt='Cupcakes with Dutch wafflesand cream.'
        style={{objectFit: 'cover'}}
        className='h-[20vh] w-full brightness-75 absolute -z-1'
        />
        <div className='flex flex-col h-full justify-around p-6 text-white font-semibold text-xl'>
          <h1 className=''>Handmade.</h1>
          <h1 className='place-self-end'>From us, to you.</h1>
        </div>
    </div>
  )
}
