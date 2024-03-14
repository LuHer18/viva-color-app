import React, { useContext } from 'react'
import { ColorContext } from '../../context/ColorContex'
import { UseProfileCard } from './card-ui/UseProfileCard'
import { LoginCard } from './card-ui/LoginCard'
import { PricingCard } from './card-ui/PricingCard'


export const Content = () => {

    const {hexaColorMain,
        hexaColorSecond} = useContext(ColorContext)
    
    return (
        <article className='flex flex-col items-center mx-5 lg:w-full'>
            <h1 className='flex  text-center gap-2 text-xl font-bold text-gray-600 mb-10'>Elementos UI</h1>
            <div className=' w-full items-center justify-center flex flex-row flex-wrap gap-3 '>
                <UseProfileCard hexaColorMain={hexaColorMain} hexaColorSecond = {hexaColorSecond}/>
                <LoginCard hexaColorMain={hexaColorMain} hexaColorSecond = {hexaColorSecond}/>
                <PricingCard/>
                
            </div>
            
            
                   
        </article>
    )
}
