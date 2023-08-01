import React, {ChangeEvent, useState} from "react";
import {Button} from "../Button/Button";
import './Settings.css'
import {Input} from "../Input/Input";

type PropsType = {
    initialValue: number;
    maxValue: number;
    onApplyChanges: (initialValue: number, maxValue: number) => void;
    onChangeStatusScreen: (status:boolean) => void
}

export const Settings = (props: PropsType) => {
    const [newInitialValue, setNewInitialValue] = useState<number>(props.initialValue);
    const [newMaxValue, setNewMaxValue] = useState<number>(props.maxValue);
    const [errorStatusInput, setErrorStatusInput] = useState<boolean>(false)


    const inputClass = errorStatusInput ? 'inp--error' : '' // need to fix with (?:)

    const handleInputChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        let value = +event.currentTarget.value
        if (value < newMaxValue && value >= 0) {
            setErrorStatusInput(false)
            setNewInitialValue(Number(value));
            props.onChangeStatusScreen(false)
        } else {
            setNewInitialValue(Number(value));
            setErrorStatusInput(true)
        }
    }

    const handleInputChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        let value = +event.currentTarget.value
        if (value > newInitialValue && value >= 0) {
            setErrorStatusInput(false)
            setNewMaxValue(value)
            props.onChangeStatusScreen(false)
        } else {
            setNewMaxValue(Number(value));
            setErrorStatusInput(true)
        }



    }

    const handleApplyChanges = () => {
        props.onApplyChanges(newInitialValue, newMaxValue);
        props.onChangeStatusScreen(true)
    };

    return (
        <div className='settings'>
            <div className='settings__screen'>
                <Input
                    value={newMaxValue}
                    callBack={handleInputChangeMaxValue}
                    name={'max value'}
                    className={inputClass}
                />
                <Input
                    value={newInitialValue}
                    callBack={handleInputChangeValue}
                    name={'start value'}
                    className={inputClass}
                />
            </div>
            <div className='settings__controls'>
                <Button name={'set'} callBack={handleApplyChanges} disabledStatus={false}/>
            </div>
        </div>
    )
}
