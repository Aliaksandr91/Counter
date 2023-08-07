import React from "react";
import {Button} from "../Button/Button";
import './Counter.css'

type PropsType = {
    count: number
    initialValue: number
    maxValue: number
    screenStatus: boolean
    onIncrementCount: () => void
    onResetCount: () => void
}

export const Counter = (props: PropsType) => {
    const incDisabled: boolean = props.count >= props.maxValue
    const resetDisabled: boolean = props.count === props.initialValue
    return (


        <div className='counter'>
            {
                props.screenStatus
                    ? <div className={incDisabled ? 'counter__screen counter__screen--max' : 'counter__screen'}>{props.count}</div>
                    : <div className='counter__screen counter__screen--text'>enter values and press 'set'</div>
            }
            <div className='counter__controls'>
                <Button
                    name={"inc"}
                    callBack={props.onIncrementCount}
                    // disabledStatus={props.screenStatus ? !props.screenStatus : !incDisabled}
                    disabledStatus={props.screenStatus ? incDisabled : !props.screenStatus}
                />
                <Button
                    name={'reset'}
                    callBack={props.onResetCount}
                    disabledStatus={props.screenStatus ? resetDisabled : !props.screenStatus}
                />
            </div>
        </div>
    )
}
