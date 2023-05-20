import React from 'react'

const TopFooter = () => {
  return (
    <div  className='w-full bg-lightBlue'>
        <div className='py-10 flex flex-col gap-2 justify-center items-center'>
            <p className='font-semibold text-xl'>¡Nos encantará escuchar lo que piensas!</p>
            <button className='w-36 h-9 border-[1px] border-black bg-white rounded-full hover:border-[2px] transition-all duration-300'>Dar opnión</button>
        </div>
    </div>
  )
}

export default TopFooter