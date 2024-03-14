import { useState } from 'react'
import { checkHexadecimalColor } from '../helpers/checkHexadecimalColor';

export const useFormColor = (id, onChangeHexaColor) => {
    const [value, setValue] = useState('');
    const [isActive, setIsActive] = useState(false);
    const onChangeColor = (e)=> {
        setValue(e.target.value)

    }
    const onSubmit = (e)=> {
        e.preventDefault();
        if( checkHexadecimalColor(value) ){
            console.log("El color hexadecimal es válido.");
            onChangeHexaColor(id,value)
            setIsActive(false)
        }else{
            console.log("El color hexadecimal es inválido.");
            setValue('')
        }
    }

    const onActive = () => {
        setIsActive(true)
    }
    const onInactive = ()=> {
        setIsActive(false)
    }

  return {
    value,
    onChangeColor,
    onSubmit,
    onActive,
    onInactive,
    isActive

  }
}
