import React from 'react'

export const Layout = ({children}) => {
  return (
    <main className='flex flex-col lg:flex-row lg:gap-0 mt-2 gap-2'>
        {children}
    </main>
  )
}
