import { useState } from "react"


export const secundaryColor = (initialColor) => {
    
    const [rgbColor, setrgbColor] = useState(initialColor)
    const onChangeRed = (e) => {
        setrgbColor({
            ...rgbColor,
            r: e.target.value
        })
    }
    const onChangeGreen = (e) => {
        setrgbColor({
            ...rgbColor,
            g: e.target.value
        })
    }

    const onChangeBlue = (e) => {
        console.log(e)
        setrgbColor({
            ...rgbColor,
            b: e.target.value
            
        }) 
    }

  return {
    secundaryRgbColor: rgbColor,
    secundaryOnChangeBlue: onChangeBlue, 
    secundaryOnChangeGreen: onChangeGreen, 
    secundaryOnchangeRed: onChangeRed
  }
}