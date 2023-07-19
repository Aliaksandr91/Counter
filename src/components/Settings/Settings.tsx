import React, {ChangeEvent} from "react";
import {Button} from "../Button/Button";
import './Settings.css'
type PropsType = {
    setValue: () => void
    onStartValueChange: (newValue:number) => void
    startValue: number
    maxValue:number
    count: number
}
export const Settings = (props:PropsType) => {
    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        const newStartValue = +event.currentTarget.value
        props.onStartValueChange(newStartValue)
    }
    return(
        <div className='settings'>
            <div className='settings__screen'>
                <div>max value<input type="number" value={props.maxValue}/></div>
                <div>
                    start value
                    <input
                        type="number"
                        value={props.count}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='settings__controls'>
                <Button name={'set'} callBack={props.setValue} disabledStatus={false}/>
            </div>
        </div>
    )
}