import React from "react";
import {Button} from "../Button/Button";
import './Counter.css'

type PropsType = {
    count: number
    startValue: number
    maxValue: number
    addCount: () => void
    resetCount: () => void
}

export const Counter = (props: PropsType) => {
    const incDisabled = props.count >= props.maxValue;
    const resetDisabled =  props.count === props.startValue
    return (
        <div className='counter'>
            <div
                className={incDisabled ? 'counter__screen counter__screen--max' : 'counter__screen'}
            >
                {props.count}
            </div>
            <div className='counter__controls'>
                <Button
                    name={"inc"}
                    callBack={props.addCount}
                    disabledStatus={incDisabled}
                />
                <Button
                    name={'reset'}
                    callBack={props.resetCount}
                    disabledStatus={resetDisabled}
                />
            </div>
        </div>
    )
}
