import React from 'react'

export const SimpleCard = ({hexaColorMain,
    hexaColorSecond}) => {
  return (
    <div className=" w-full max-w-sm h-[310px] p-6 border border-gray-400 rounded-lg shadow" style={{backgroundColor: hexaColorMain}}>
        <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight" style={{color: hexaColorSecond}} >Noteworthy technology acquisitions 2021</h5>
    </a>
        <p className="mb-3 font-normal" style={{color: hexaColorSecond}} >Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg" style={{color: hexaColorMain, backgroundColor: hexaColorSecond}}>
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor"  d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
  )
}   
