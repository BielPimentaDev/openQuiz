import React from 'react'

export function PrimaryButton({children}: any) {
  return (
    <button className='uppercase bg-strong text-white px-12 py-2 rounded-lg w-full' >
        {children}
    </button>
  )
}
