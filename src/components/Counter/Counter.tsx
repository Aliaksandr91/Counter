import React from "react";
import {Button} from "../Button/Button";
import './Counter.css'
import {ScreenValuesType} from "../../App";

type PropsType = {
    count: number
    initialValue: number
    maxValue: number
    screenStatus: ScreenValuesType
    onIncrementCount: () => void
    onResetCount: () => void
}

export const Counter = (props: PropsType) => {
    const incDisabled: boolean = props.count >= props.maxValue
    const resetDisabled: boolean = props.count === props.initialValue

    return (


        <div className='counter'>
            {
                (() => {
                    switch (props.screenStatus) {
                        case 'counter':
                            return <div className={incDisabled ? 'counter__screen counter__screen--max' : 'counter__screen'}>{props.count}</div>
                        case 'settings':
                            return <div className='counter__screen counter__screen--text'>enter values and press 'set'</div>
                        case 'error':
                            return <div className='counter__screen counter__screen--error'>Incorrect value!</div>
                    }
                })()
            }

            <div className='counter__controls'>
                <Button
                    name={"inc"}
                    callBack={props.onIncrementCount}
                    disabledStatus={props.screenStatus === 'counter' ? incDisabled : true}
                />
                <Button
                    name={'reset'}
                    callBack={props.onResetCount}
                    disabledStatus={props.screenStatus === 'counter' ? resetDisabled : true}
                />
            </div>
        </div>
    )
}
