import React, {ChangeEvent, useState} from "react";
import {Button} from "../Button/Button";
import './Settings.css'
type PropsType = {
    setValue: (v:number) => void
    onStartValueChange: () => void
    startValue: number
    maxValue:number
    count: number
}
export const Settings = (props:PropsType) => {

    const [value, setValue] = useState<number>(props.startValue)
    //let newValue = props.startValue
    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        let newValue = +event.currentTarget.value
        setValue(newValue)
        props.onStartValueChange()

    }
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