

import { mainColor } from "../../helpers/mainColor"
import { secundaryColor } from "../../helpers/secundaryColor"
import { CardColor } from "../CardColor/CardColor"

export const ColorInputs = () => {
    const {mainrgbcolor, mainOnChageBlue,mainOnChageGreen, mainOnChangeRed } = mainColor({ r: 0,g: 0,b:0,})
    const {secundaryRgbColor, secundaryOnChangeBlue, secundaryOnChangeGreen, secundaryOnchangeRed} = secundaryColor({ r: 255,g: 255,b:255,})

    const initialColors = [
        {   id: '1',
            name: 'Color principal', 
            rgbColor: mainrgbcolor,
            onChangeBlue: mainOnChageBlue,
            onChangeGreen: mainOnChageGreen,
            onChangeRed: mainOnChangeRed,

        },
        {   id: '2',
            name: 'Color secundario', 
            rgbColor: secundaryRgbColor,
            onChangeBlue: secundaryOnChangeBlue,
            onChangeGreen: secundaryOnChangeGreen,
            onChangeRed: secundaryOnchangeRed,
        }
    ]
    console.log(mainrgbcolor)
    console.log(secundaryRgbColor)

    return (

        <>
            <aside className="flex flex-col justify-center  items-center mx-10 ">
                {initialColors.map(color => (
                    
                    <CardColor key={color.id} {...color}/>

            
                ))}
                
            </aside>
        </>
    )
}
