import React, { useContext } from 'react'
import { ColorContext } from '../../context/ColorContex'


export const Content = () => {

    const {hexaColorMain,
        hexaColorSecond} = useContext(ColorContext)
    
    return (
        <article className='mx-10 w-full'>
            
            <div className={`w-20 h-20 border border-black `} style={{backgroundColor: hexaColorMain}}>
                <div className={`w-5 h-5 border border-black`} style={{backgroundColor: hexaColorSecond}}></div>
            </div>
        </article>
    )
}
