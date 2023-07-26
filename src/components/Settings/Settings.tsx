import React, {ChangeEvent, useState} from "react";
import {Button} from "../Button/Button";
import './Settings.css'
type PropsType = {
    initialValue: number;
    maxValue: number;
    onApplyChanges: (initialValue: number, maxValue: number) => void;
}

export const Settings = (props:PropsType) => {
    const [newInitialValue, setNewInitialValue] = useState<number>(props.initialValue);
    const [newMaxValue, setNewMaxValue] = useState<number>(props.maxValue);

    const handleInputChangeValue = (event:ChangeEvent<HTMLInputElement>) => {
        let value = +event.currentTarget.value
        setNewInitialValue(Number(value));
    }

    const handleInputChangeMaxValue = (event:ChangeEvent<HTMLInputElement>) => {
        let value = +event.currentTarget.value
        setNewMaxValue(value)
    }


    const handleApplyChanges = () => {
        props.onApplyChanges(newInitialValue, newMaxValue);
    };


    return(
        <div className='settings'>
            <div className='settings__screen'>
                <div>
                    max value
                    <input
                        type="number"
                        value={newMaxValue}
                        onChange={handleInputChangeMaxValue}
                    />
                </div>
                <div>
                    start value
                    <input
                        type="number"
                        value={newInitialValue}
                        onChange={handleInputChangeValue}
                    />
                </div>
            </div>
            <div className='settings__controls'>
                <Button name={'set'} callBack={handleApplyChanges} disabledStatus={false}/>
            </div>
        </div>
    )
}