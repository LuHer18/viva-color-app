import React from 'react'

export const PricingCard = ({hexaColorMain, hexaColorSecond}) => {
    return (
        <div className="w-full max-w-sm p-4 h-[310px] border border-gray-400 rounded-lg shadow sm:p-8" style={{backgroundColor: hexaColorMain}}>
            <div className='flex justify-between items-start'>
            <h5 className=" text-xl font-medium " style={{color:hexaColorSecond}}>Standard plan</h5>
            <div className="flex items-baseline text-gray-900 dark:text-white" style={{color:hexaColorSecond}}>
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">49</span>
                <span className="ms-1 text-xl font-normal ">/month</span>
            </div>
            </div>
            <ul role="list" className="space-y-2 my-2">
                <li className="flex items-center">
                    <svg className="flex-shrink-0 w-4 h-4"  style={{color:hexaColorSecond}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight ms-3" style={{color:hexaColorSecond}}>2 team members</span>
                </li>
                <li className="flex">
                    <svg className="flex-shrink-0 w-4 h-4" style={{color:hexaColorSecond}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight ms-3" style={{color:hexaColorSecond}}>20GB Cloud storage</span>
                </li>
                <li className="flex">
                    <svg className="flex-shrink-0 w-4 h-4" style={{color:hexaColorSecond}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight ms-3" style={{color:hexaColorSecond}}>Integration help</span>
                </li>
                <li className="flex line-through decoration-gray-500">
                    <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight ms-3" style={{color:hexaColorSecond}}>Sketch Files</span>
                </li>
                <li className="flex line-through decoration-gray-500">
                    <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight ms-3" style={{color:hexaColorSecond}}>API Access</span>
                </li>
                <li className="flex line-through decoration-gray-500">
                    <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight ms-3" style={{color:hexaColorSecond}}>Complete documentation</span>
                </li>
            </ul>
            <button type="button" className="font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" style={{backgroundColor: hexaColorSecond, color: hexaColorMain}}>Choose plan</button>
        </div>
    )
}
