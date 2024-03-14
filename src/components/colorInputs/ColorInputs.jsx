import { useContext } from "react"
import { CardColor } from "../CardColor/CardColor"
import { ColorContext } from "../../context/ColorContex"

export const ColorInputs = () => {

        const {
            mainColor,
            secondColor,
            onChangeRed,
            onChangeGreen,
            onChangeBlue,
            hexaColorMain,
            hexaColorSecond,
            onChangeHexaColor
        } = useContext(ColorContext)
    
    const initialColors = [
        {   id: '1',
            name: 'Color principal', 
            rgbColor: mainColor,
            onChangeBlue,
            onChangeGreen,
            onChangeRed,
            hexaColor: hexaColorMain,
            onChangeHexaColor
    
        },
        {   
            id: '2',
            name: 'Color secundario', 
            rgbColor: secondColor,
            onChangeBlue,
            onChangeGreen,
            onChangeRed,
            hexaColor: hexaColorSecond,
            onChangeHexaColor
        }
    ]

    return (

        <>
            
            <aside className="flex flex-col relative  mx-5 ">
                <h1 className="flex w-full gap-2 text-xl font-bold text-gray-600 mb-10">Color inputs</h1>
                <hr className=" bg-gray-600 h-1 mb-4" />
                {initialColors.map(color => (
                    
                    <CardColor key={color.id} {...color}/>
                ))}

            </aside>
        </>
    )
}
