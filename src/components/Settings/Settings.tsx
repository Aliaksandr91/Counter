import React, {ChangeEvent, useEffect, useState} from "react";
import {Button} from "../Button/Button";
import './Settings.css'
import {getStartInputValue} from "../../App";
type PropsType = {
    setValue: (value:number) => void
    onStartValueChange: () => void
    startValue: number
    maxValue:number
    count: number
}

export const Settings = (props:PropsType) => {


    const [value, setValue] = useState<number>(getStartInputValue)
    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        let newValue = +event.currentTarget.value
        setValue(newValue)
        props.onStartValueChange()
    }

    useEffect(() => {
        localStorage.setItem('inputValue', JSON.stringify(value))
    }, [value])

    return(
        <div className='settings'>
            <div className='settings__screen'>
                <div>max value<input type="number" value={props.maxValue}/></div>
                <div>
                    start value
                    <input
                        type="number"
                        value={value}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='settings__controls'>
                <Button name={'set'} callBack={()=>props.setValue(value)} disabledStatus={false}/>
            </div>
        </div>
    )
}