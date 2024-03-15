import React from 'react'
import luher from '../../../assets/LuHer-Avatar.webp'
export const FollowerProfile = ({hexaColorMain,
    hexaColorSecond}) => {
  return (
    <div className='w-full border h-[310px] border-gray-400 max-w-sm flex flex-col justify-center items-center rounded-lg shadow sm:p-8' style={{backgroundColor: hexaColorMain}}>
        <figure className=' p-4 w-24 flex justify-center items-center rounded-full' style={{backgroundColor: hexaColorSecond}}>
            <img src={luher} alt="Avatar de Luis" />
        </figure>
        <h1 className='text-xl font-extrabold pt-3 ' style={{color: hexaColorSecond}}>Luis Herrera</h1>
        <h3 className='text-md font-extrabold pb-4 ' style={{color: hexaColorSecond}}>Cartagena Colombia</h3>
        <div>
            <dl className='flex gap-3 '>
                <div className='flex flex-col justify-center items-center '>
                    <dt className='font-extrabold text-sm' style={{color: hexaColorSecond}}>Projects</dt>
                    <dd className='font-extrabold text-xl' style={{color: hexaColorSecond}}>10</dd>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <dt className='font-extrabold text-sm' style={{color: hexaColorSecond}}>Followers</dt>
                    <dd className='font-extrabold text-xl' style={{color: hexaColorSecond}}>200</dd>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <dt className='font-extrabold text-sm' style={{color: hexaColorSecond}}>Following</dt>
                    <dd className='font-extrabold text-xl' style={{color: hexaColorSecond}}>100</dd>
                </div>
            </dl>
        </div>

    </div>
  )
}
