import React, {ChangeEvent, useState} from "react";
import {Button} from "../Button/Button";
import './Settings.css'
import {Input} from "../Input/Input";
import {ScreenValuesType} from "../../App";

type PropsType = {
    initialValue: number;
    maxValue: number;
    onApplyChanges: (initialValue: number, maxValue: number) => void;
    onChangeStatusScreen: (status:ScreenValuesType) => void
}


export const Settings = (props: PropsType) => {
    const [newInitialValue, setNewInitialValue] = useState<number>(props.initialValue);
    const [newMaxValue, setNewMaxValue] = useState<number>(props.maxValue);
    const [errorStatusInput, setErrorStatusInput] = useState<boolean>(false)
    const [disabledStatusBtn, setDisabledStatusBtn] = useState<boolean>(true)


    const inputClass = errorStatusInput ? 'inp--error' : ''

    const confirmChanges = () => {
        setErrorStatusInput(false)
        setDisabledStatusBtn(false)
        props.onChangeStatusScreen('settings')
    }
    const unConfirmChanges = () => {
        setErrorStatusInput(true)
        setDisabledStatusBtn(true)
        props.onChangeStatusScreen('error')
    }


    const handleInputChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        let value = +event.currentTarget.value
        if (value < newMaxValue && value >= 0) {
            setNewInitialValue(Number(value));
            confirmChanges()
        } else {
            setNewInitialValue(Number(value));
            unConfirmChanges()
        }
    }

    const handleInputChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        let value = +event.currentTarget.value
        if (value > newInitialValue && value >= 0) {
            setNewMaxValue(value)
            confirmChanges()
        } else {
            setNewMaxValue(Number(value));
            unConfirmChanges()
        }
    }

    const handleApplyChanges = () => {
        props.onApplyChanges(newInitialValue, newMaxValue);
        setDisabledStatusBtn(true)
        props.onChangeStatusScreen('counter')
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
                <Button name={'set'} callBack={handleApplyChanges} disabledStatus={disabledStatusBtn}/>
            </div>
        </div>
    )
}
