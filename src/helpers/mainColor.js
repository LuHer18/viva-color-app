import { useState } from "react"


export const mainColor = (initialColor) => {
    
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
    mainrgbcolor: rgbColor, 
    mainOnChageBlue: onChangeBlue, 
    mainOnChageGreen: onChangeGreen,
    mainOnChangeRed: onChangeRed
  }
}
