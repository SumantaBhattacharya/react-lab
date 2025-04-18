import React from 'react'

export const Header = () => {
    return (
        <div
            className='flex items-end justify-between mb-4'
        >
            <div>
                <h1 className='text-[2vw]'>hey!
                    <br />
                    <span className='text-blue-300 text-[2.4vw] font-semibold leading-tight'>Sumanta🤟</span>
                </h1>

            </div>
            <button className='border-red-600 border-2 rounded-md text-lg font-medium px-4 py-2 outline-none bg-transparent hover:bg-red-500 hover:scale-105 hover:rotate-3 transition-all duration-500 ease-in-out hover:shadow-lg'>
  Logout
</button>


        </div>
    )
}
