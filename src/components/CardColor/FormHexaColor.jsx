import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import {PencilSquareIcon} from '@heroicons/react/24/solid'
import {CheckCircleIcon} from '@heroicons/react/24/solid'
import { useFormColor } from '../../hooks/useFormColor'





export const FormHexaColor = ({hexaColor, id, onChangeHexaColor }) => {
    const {value,onChangeColor, onSubmit, onActive, onInactive, isActive} = useFormColor(id, onChangeHexaColor)
   
    
  

  return (
    <div className='relative flex flex-col items-center mt-4'> 
        <div className='flex gap-1 items-center'>
            <div className='w-6 h-6 rounded-md border border-gray-300' style={{backgroundColor: hexaColor}}></div>
            <h1 className=' text-gray-600'>{hexaColor}</h1>
            <button onClick={()=>onActive()} className='rounded-md cursor-pointer w-6 h-6'><PencilSquareIcon className='w-full h-full text-gray-700 hover:text-emerald-400 '/></button>
        </div>
        <div className={`${!isActive? 'hidden': 'flex'} bg-white absolute -top-1 w-60 h-20 border flex-col border-gray-300 z-10 rounded-md `} >
            <button onClick={()=>onInactive()} className='text-start  w-6 h-6 '> <ArrowLeftIcon className='w-full h-full m-1 text-gray-700 hover:text-red-700'/></button>
            <div className='flex justify-center items-center'>
                <form className='flex items-center gap-1'  onSubmit={onSubmit}>
                    <input className='w-20 h-8 border outline-none rounded-md focus:border-emerald-400'  type="text" placeholder='#000000' value={value} onChange={onChangeColor}  />
                    <button className='w-6 h-6'><CheckCircleIcon className='w-6 h-6 text-gray-700 hover:text-emerald-400'/></button>

                </form>
            </div>
        </div> 
    </div>
  )
}
