import { ColorContext } from "./ColorContex"
import { useState } from "react"
import { rgbToHexa } from '../helpers/rgbToHexa'
import { hexaToRgb } from "../helpers/hexaToRgb"

const initialMain = {
    r: 0,
    g: 0,
    b: 0,
    id: '1'
}
const initialSecond = {
    r: 255,
    g: 255,
    b: 255,
    id: '2',
}

export const ColorProvider = ({children}) => {
    const [{mainColor, secondColor}, setRgbColor] = useState({mainColor: initialMain, secondColor: initialSecond})

    const [{hexaColorMain, hexaColorSecond}, setHexaColor] = useState({hexaColorMain:'#000000', hexaColorSecond: '#FFFFFF'})
    

    const onChangeRed = (e, id) => {
            if(id === mainColor.id){
                setRgbColor({
                    mainColor: {
                        ...mainColor,
                        r: Number(e.target.value)
                    }, secondColor
                })
                setHexaColor(
                    {
                       hexaColorMain: `#${rgbToHexa({...mainColor, r: Number(e.target.value)})}`,
                       hexaColorSecond,
                    }
                )
                
            } else if (id === secondColor.id){
                setRgbColor({
                    mainColor,
                    secondColor: {
                       ...secondColor,
                       r: Number(e.target.value) 
                    }

                })
                setHexaColor(
                    {
                       hexaColorMain,
                       hexaColorSecond: `#${rgbToHexa({...secondColor, r: Number(e.target.value)})}`,
                    }
                )
            }
        }
    
    const onChangeGreen = (e, id) => {
        if(id === mainColor.id){
            setRgbColor({
                mainColor: {
                    ...mainColor,
                    g: Number(e.target.value)
                }, secondColor
            })
            setHexaColor(
                {
                   hexaColorMain: `#${rgbToHexa({...mainColor, g: Number(e.target.value)})}`,
                   hexaColorSecond,
                }
            )
            
        } else if (id === secondColor.id){
            setRgbColor({
                mainColor,
                secondColor: {
                   ...secondColor,
                   g: Number(e.target.value),
                }

            })
            setHexaColor(
                {
                   hexaColorMain,
                   hexaColorSecond: `#${rgbToHexa({...secondColor, g: Number(e.target.value)})}`,
                }
            )
        }
    }

    const onChangeBlue = (e, id) => {
        if(id === mainColor.id){
            setRgbColor({
                mainColor: {
                    ...mainColor,
                    b: Number(e.target.value)
                }, secondColor
            })
            setHexaColor(
                {
                   hexaColorMain: `#${rgbToHexa({...mainColor, b: Number(e.target.value)})}`,
                   hexaColorSecond,
                }
            )

        } else if (id === secondColor.id){
            setRgbColor({
                mainColor,
                secondColor: {
                   ...secondColor,
                   b: Number(e.target.value),
                }
            })
            setHexaColor(
                {
                   hexaColorMain,
                   hexaColorSecond: `#${rgbToHexa({...secondColor, b: Number(e.target.value)})}`,
                }
            )
            
        }
    }

    const onChangeHexaColor = (id, value) => {
        if(id === mainColor.id){
            setHexaColor({
                hexaColorMain: value,
                hexaColorSecond,
            })

            if(value.includes('#')){
                setRgbColor ({
                    mainColor: hexaToRgb(value.replace('#','0x'), id),
                    secondColor,
                })

            }else {
                setRgbColor ({
                    mainColor: hexaToRgb(`0x${value}`, id),
                    secondColor,
                })

            }

        }else if (id === secondColor.id) {
            setHexaColor({
                hexaColorMain,
                hexaColorSecond: value,
            })

            if(value.includes('#')){
                setRgbColor ({
                    mainColor,
                    secondColor: hexaToRgb(value.replace('#','0x'), id),
                })

            }else {
                setRgbColor ({
                    mainColor,
                    secondColor: hexaToRgb(`0x${value}`, id),
                })

            }

        }
        
    }

  return (
    <ColorContext.Provider value={
        { 
            mainColor,
            secondColor,
            onChangeRed,
            onChangeGreen,
            onChangeBlue,
            hexaColorMain,
            hexaColorSecond,
            onChangeHexaColor
        }
        }>
    {children}
    </ColorContext.Provider>
  )
}
