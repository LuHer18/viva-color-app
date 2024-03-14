import { useContext } from "react"
import { CardColor } from "../CardColor/CardColor"
import { ColorContext } from "../../context/ColorContex"

import {ArrowsRightLeftIcon} from '@heroicons/react/24/solid'

export const ColorInputs = () => {

        const {
            mainColor,
            secondColor,
            onChangeRed,
            onChangeGreen,
            onChangeBlue,
            hexaColorMain,
            hexaColorSecond,
            onChangeHexaColor,
            handleColor,
            copiedMain,
            copiedSecond
        } = useContext(ColorContext)
    
    const initialColors = [
        {   id: '1',
            name: 'Color principal', 
            rgbColor: mainColor,
            onChangeBlue,
            onChangeGreen,
            onChangeRed,
            hexaColor: hexaColorMain,
            onChangeHexaColor,
            copied: copiedMain
    
        },
        {   
            id: '2',
            name: 'Color secundario', 
            rgbColor: secondColor,
            onChangeBlue,
            onChangeGreen,
            onChangeRed,
            hexaColor: hexaColorSecond,
            onChangeHexaColor,
            copied: copiedSecond
        }
    ]

    return (

        <>
            <aside className="flex flex-col relative h-[600px] mx-5 ">
                <h1 className="flex w-full gap-2 text-xl font-bold text-gray-600 mb-10">Color inputs</h1>
                <hr className=" bg-gray-600 h-1 mb-4" />
                {initialColors.map(color => (
                    
                    <CardColor key={color.id} {...color}/>
                ))}
                <button
                    onClick={handleColor}
                    className="absolute flex justify-center items-center w-10 h-10 border border-gray-400 rounded-full" 
                    style={{top:'50%', left: '45%',transform: 'traslate(-50%, -45%)'}}
                >
                    <ArrowsRightLeftIcon className=" text-gray-700 w-6 h-6 hover:text-emerald-400"/>
                </button>

            </aside>
        </>
    )
}
