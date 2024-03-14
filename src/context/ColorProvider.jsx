import { ColorContext } from "./ColorContex"
import { useState } from "react"
import { rgbToHexa } from '../helpers/rgbToHexa'
import { hexaToRgb } from "../helpers/hexaToRgb"
import {toast} from 'sonner'

const initialMain = {
    r: 255,
    g: 255,
    b: 255,
    id: '1'
}
const initialSecond = {
    r: 0,
    g: 0,
    b: 0,
    id: '2',
}

export const ColorProvider = ({ children }) => {
    const [{ mainColor, secondColor }, setRgbColor] = useState({ mainColor: initialMain, secondColor: initialSecond })

    const [{ hexaColorMain, hexaColorSecond }, setHexaColor] = useState({ hexaColorMain: '#FFFFFF' , hexaColorSecond: '#000000' })

    const [{copiedMain, copiedSecond}, setCopied] = useState({copiedMain: false, copiedSecond: false});

    const onChangeRed = (e, id) => {
        if (id === mainColor.id) {
            setRgbColor({
                mainColor: {
                    ...mainColor,
                    r: Number(e.target.value)
                }, secondColor
            })
            setHexaColor(
                {
                    hexaColorMain: `#${rgbToHexa({ ...mainColor, r: Number(e.target.value) })}`,
                    hexaColorSecond,
                }
            )

        } else if (id === secondColor.id) {
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
                    hexaColorSecond: `#${rgbToHexa({ ...secondColor, r: Number(e.target.value) })}`,
                }
            )
        }
    }

    const onChangeGreen = (e, id) => {
        if (id === mainColor.id) {
            setRgbColor({
                mainColor: {
                    ...mainColor,
                    g: Number(e.target.value)
                }, secondColor
            })
            setHexaColor(
                {
                    hexaColorMain: `#${rgbToHexa({ ...mainColor, g: Number(e.target.value) })}`,
                    hexaColorSecond,
                }
            )

        } else if (id === secondColor.id) {
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
                    hexaColorSecond: `#${rgbToHexa({ ...secondColor, g: Number(e.target.value) })}`,
                }
            )
        }
    }

    const onChangeBlue = (e, id) => {
        if (id === mainColor.id) {
            setRgbColor({
                mainColor: {
                    ...mainColor,
                    b: Number(e.target.value)
                }, secondColor
            })
            setHexaColor(
                {
                    hexaColorMain: `#${rgbToHexa({ ...mainColor, b: Number(e.target.value) })}`,
                    hexaColorSecond,
                }
            )

        } else if (id === secondColor.id) {
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
                    hexaColorSecond: `#${rgbToHexa({ ...secondColor, b: Number(e.target.value) })}`,
                }
            )

        }
    }

    const onChangeHexaColor = (id, value) => {
        if (id === mainColor.id) {
            setHexaColor({
                hexaColorMain: value,
                hexaColorSecond,
            })

            if (value.includes('#')) {
                setRgbColor({
                    mainColor: hexaToRgb(value.replace('#', '0x'), id),
                    secondColor,
                })

            } else {
                setRgbColor({
                    mainColor: hexaToRgb(`0x${value}`, id),
                    secondColor,
                })

            }

        } else if (id === secondColor.id) {
            setHexaColor({
                hexaColorMain,
                hexaColorSecond: value,
            })

            if (value.includes('#')) {
                setRgbColor({
                    mainColor,
                    secondColor: hexaToRgb(value.replace('#', '0x'), id),
                })

            } else {
                setRgbColor({
                    mainColor,
                    secondColor: hexaToRgb(`0x${value}`, id),
                })

            }

        }
    }
    const handleColor = () => {
        setRgbColor(
            {
                mainColor: {...secondColor, id:'1'},
                secondColor: {...mainColor, id:'2'}
            }
        )
        setHexaColor({
            hexaColorMain: hexaColorSecond,
            hexaColorSecond: hexaColorMain,
            
        }
        )
    }

    const handleCopy = (id) => {
        if( id === mainColor.id){
            const textToCopy = `--primary: ${hexaColorMain};`;
            toast.success(textToCopy)
            navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied({copiedMain: true, copiedSecond});
                setTimeout(() => {
                    setCopied({copiedMain: false, copiedSecond})
                }, 1000);
            })
            .catch((error) => console.log(error));
        }else if( id === secondColor.id){
            const textToCopy = `--second: ${hexaColorSecond};`;
            toast.success(textToCopy)
            navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied({copiedMain, copiedSecond: true});
                setTimeout(() => {
                    setCopied({copiedMain, copiedSecond: false})
                }                    
                , 1000);
            })
            .catch((error) => console.log(error));
        }
      };

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
                onChangeHexaColor,
                handleColor,
                handleCopy,
                copiedMain,
                copiedSecond
                
            }
        }>
            {children}
        </ColorContext.Provider>
    )
}
