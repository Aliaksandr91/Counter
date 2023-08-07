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

    const counterScreen = props.screenStatus === 'counter'
    const settingsScreen = props.screenStatus === 'settings'


    return (
        <div className='counter'>
            {
                counterScreen
                    ? <div className={incDisabled ? 'counter__screen counter__screen--max' : 'counter__screen'}>{props.count}</div>
                    : settingsScreen
                        ? <div className='counter__screen counter__screen--text'>enter values and press 'set'</div>
                        : <div className='counter__screen counter__screen--error'>Incorrect value!</div>
                // (() => {
                //     switch (props.screenStatus) {
                //         case 'counter':
                //             return <div className={incDisabled ? 'counter__screen counter__screen--max' : 'counter__screen'}>{props.count}</div>
                //         case 'settings':
                //             return <div className='counter__screen counter__screen--text'>enter values and press 'set'</div>
                //         case 'error':
                //             return <div className='counter__screen counter__screen--error'>Incorrect value!</div>
                //     }
                // })()
            }

            <div className='counter__controls'>
                <Button
                    name={"inc"}
                    callBack={props.onIncrementCount}
                    disabledStatus={counterScreen ? incDisabled : !counterScreen}
                />
                <Button
                    name={'reset'}
                    callBack={props.onResetCount}
                    disabledStatus={counterScreen ? resetDisabled : !counterScreen}
                />
            </div>
        </div>
    )
}
