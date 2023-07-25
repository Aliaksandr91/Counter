import React, {ChangeEvent, useEffect, useState} from "react";
import {Button} from "../Button/Button";
import './Settings.css'
import {getMaxInputValue, getStartInputValue} from "../../App";
type PropsType = {
    setValue: (value:number) => void
    startValue: number
    maxValue:number
    count: number
}

export const Settings = (props:PropsType) => {
    const [value, setValue] = useState<number>(getStartInputValue)
    const [maxValue, setMaxValue] = useState<number>(getMaxInputValue)
    const handleInputChangeValue = (event:ChangeEvent<HTMLInputElement>) => {
        let newValue = +event.currentTarget.value
        setValue(newValue)
    }

    const handleInputChangeMaxValue = (event:ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = +event.currentTarget.value
        setMaxValue(newMaxValue)
    }

    useEffect(() => {
        localStorage.setItem('inputValue', JSON.stringify(value))
    }, [value])

    useEffect(() => {
        localStorage.setItem('counterValueMax', JSON.stringify(maxValue))
    }, [maxValue])

    return(
        <div className='settings'>
            <div className='settings__screen'>
                <div>
                    max value
                    <input
                        type="number"
                        value={maxValue}
                        onChange={handleInputChangeMaxValue}
                    />
                </div>
                <div>
                    start value
                    <input
                        type="number"
                        value={value}
                        onChange={handleInputChangeValue}
                    />
                </div>
            </div>
            <div className='settings__controls'>
                <Button name={'set'} callBack={()=>props.setValue(value)} disabledStatus={false}/>
            </div>
        </div>
    )
}